const fs = require('fs');
const path = require('path');

const Summary = require("../models/summaryModel");
const User = require('../models/userModel.js')

let json = fs.readFileSync(path.join(__dirname,'../models/summary.json'))

const getSummary = async (req, res) => {
    console.log("in summary controller");
    try{
        
        let ytLink = `https://youtu.be/${req.query.search}`
        let data = await Summary.findOne({uid: req.body.uid, 'content.ytLink':ytLink });

        if (data) {
            res.status(200).json(data); 
            return;
        }
        
        // const apiResponse = await fetch("https://56f8-106-195-37-168.ngrok-free.app/summary", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         "youtube_link": req.query.search
        //     })
        // })
    
        // const json = await apiResponse.json();json.ok == 200
        if (true) {
            let data = await JSON.parse(json.toString())
            data.chapter_summary.forEach((str,i) => { 
                str = str.slice(15) 
                data.chapter_summary[i] = str.split('\n\nSummary:\n')
                data.chapter_summary[i][1] = data.chapter_summary[i][1].split('\n')
            })
            data.overall_summary = data.overall_summary.split('Chapter Title: ').slice(1)
            data.overall_summary.forEach((str,i) => { 
                data.overall_summary[i] = (str.split('\n\nKey Takeaways:\n\n')).slice(1)
                data.overall_summary[i] = data.overall_summary[i][0].split('\n')
            })

            let thumbnail, title;

            data.ytLink = ytLink;

            let ytres = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${req.query.search}&key=${REACT_APP_GOOGLE_API_KEY}`)
            if (ytres.status == 200) {
                const ytjson = await ytres.json();
                title = ytjson.items[0].snippet.title;
                data.title = title;
                thumbnail = ytjson.items[0].snippet.thumbnails.medium;
            }
            else {
                console.log("ERROR IN youtube API (title of url)\n", json)
            }

            console.log (data);
            await Summary.create({ uid: req.body.uid , content: data });
            await User.findOneAndUpdate({uid: req.body.uid, history: {$ne: ytLink}}, {
                $push: { history: {ytLink, thumbnail, title} }
            })
            res.status(200).json(data); 
            
        }
        else {
            console.log("ERROR IN API\n", json)
        }

    }
    catch(err) {
        console.log(err)
    }

}

const getSummaryHistory = async (req,res) => {
    const summaries = await User.findOne({uid: req.body.uid});
    res.status(200).json(summaries.history);
}

const getSummaryById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such summary" })
    }

    const summary = await Summary.findById(id);

    if (!summary) {
        return res.status(404).json({ error: "No such summary" });
    }

    if (summary.uid != req.body.uid) {
        return res.status(401).json({ error: "access denied" });
    }

    res.status(200).json(summary.content);
}

module.exports = {getSummary, getSummaryById, getSummaryHistory}