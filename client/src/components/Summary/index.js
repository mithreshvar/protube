import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import ChapterSummary from "./ChapterSummary";
import KeyPoints from "./KeyPoints";

export default function Summary() {
    
    const { logout, user } = UserAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    const [data, setData] = useState({})

    const ytLink = searchParams.get('search')
    let ytLinkId = ytLink.split(/[/=]/gm)
    ytLinkId = ytLinkId[ytLinkId.length-1]
    

    // const count = useRef(0); //! remove on production
    useEffect(() => {
        // if (count.current !== 0) { //! remove on production
            const fetchData = async () => {
                
                try{
                    let idToken = await user.getIdToken(true)
                    const response = await fetch(`http://localhost:8081/api/summary?search=${ytLinkId}`, {
                        headers: { 'Authorization': `Bearer ${idToken}` },
                    });
                    const json = await response.json();
                    console.log(json)
                    if (response.ok) {
                        setData(json)
                    }
                    else {
                        console.log(json.error)
                    }
                }
                catch(err) {
                    console.log(err.message);
                }
                
            }

            fetchData();
        // }
        // count.current++; //! remove on production
    }, []);


    const handleLogout = async () => {
        try {
            await logout()
            navigate('/');
            console.log("you are logged out!")
        }catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="h-[100vh] relative box-border flex flex-col py-[50px] bg-[#101728] px-[150px] overflow-hidden overflow-y-auto text-white font-shapirit_bold" >
            <div className="flex flex-col pb-[50px] ">
            
                <div className=" flex justify-between">
                    <div className="flex items-center gap-x-[10px]">
                        <img src={Logo} className='w-[45px] h-[33px] ' alt="logo"/>
                        <div className="text-[30px] leading-[50px] " >
                            Protube
                        </div>
                    </div>
                    <div className="flex gap-x-[25px] items-center text-[24px]"> 
                        <div><span className="text-[#9340ff]">Credits</span> : {user?.credits}</div>
                        <Link to={"/pricing"} >
                            <div className="btn-primary w-[170px] h-[64px] text-[20px]">
                                Buy Credits
                            </div>
                        </Link>
                        <div className="btn-primary w-[170px] h-[64px] text-[20px]" onClick={handleLogout}>
                            Log Out
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-[full] h-[630px] shrink-0 p-[40px] px-[100px]  ">
              <iframe className="w-full h-full " src={`https://www.youtube.com/embed/${ytLinkId}`} title="YouTube video player" ></iframe> {/*frameborder="0" allowfullscreen */}
            </div>

            <div className="text-[38px]  mb-[60px] ">
                <div className="flex items-center gap-x-[15px]">
                    <img className=" w-[45px] h-[45px] "  src="https://media-public.canva.com/nDVqg/MADwfLnDVqg/3/t.png" alt="search illustration" />
                    <h1>Title of Video</h1>
                </div>
                <h2 className="ml-[70px] mt-[20px] ">{data?.content?.title}</h2>
            </div>

            <div>
                <div className="text-[38px] flex items-center gap-x-[15px] " >
                    <img className=" w-[45px] h-[40px] "  src="https://media-public.canva.com/8TDic/MAFKG28TDic/1/t.png" alt="notes illustration" />
                    Chapter Summary
                </div>
            
                <div className="py-[30px] flex gap-x-[30px] overflow-x-scroll mx-[-150px] pl-[200px] ">
                    { data?.content?.chapter_summary?.map((arr, index) => {
                        return (<ChapterSummary sno={index+1} key={index} title={arr[0]} content={arr[1]} />)
                    }) }
                </div>
            </div>

            <div className="flex flex-col gap-y-[30px] mt-[30px] ">
                <div className="text-[38px] flex items-center gap-x-[15px] " >
                    <img className=" w-[45px] h-[45px] "  src="https://media-public.canva.com/DGlDY/MAELYLDGlDY/1/t.png" alt="idea bulb illustration" />
                    Key Points 
                </div>

                <KeyPoints content={data.content?.overall_summary} />
            </div>

            <button  className="bg-[#ff3c5f] rounded-[25px] text-[30px] mt-[40px] flex items-center justify-center cursor-pointer w-[170px] h-[55px] shrink-0 self-center ">
                Share
            </button>
        </div>
  )
}
