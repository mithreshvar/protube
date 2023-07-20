require('dotenv').config();

let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let path = require("path");
let userRoutes = require('./routes/user.js');
let summaryRoutes = require('./routes/summary.js')


const app = express();
const port = process.env.REACT_APP_PORT;

// middlewares
app.use(cors());
// {
//     origin: ['https://protube-backend.onrender.com']
// }
app.use(express.json());


// // Pick up React index.html file
// app.use(
//     express.static(path.join(__dirname, "../client/build"))
// );


// routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/user', userRoutes);
app.use('/api/summary', summaryRoutes);

// // Catch all requests that don't match any route
// app.get("*", (req, res) => {
//     res.sendFile(
//         path.join(__dirname, "../client/build/index.html")
//     );
// });


// connect to db
mongoose.connect(process.env.REACT_APP_ATLAS_URI)
    .then(() => {
        // listen to port
        app.listen(port, () => {
            console.log("connected to database && Server running on port: ", port);
        });
    })
    .catch((error) => {
        console.log(error);
    })
