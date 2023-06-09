import { Link } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import ChapterSummary from "./ChapterSummary";
import KeyPoints from "./KeyPoints";

export default function Summary() {

    const [credits, setCredits] = useState(100);

    const { logout } = UserAuth();
    const navigate = useNavigate();

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
        <div className="h-[100vh] relative box-border bg-[#101728] px-[150px] overflow-hidden overflow-y-auto text-white font-shapirit_bold" >
            <div className="flex flex-col py-[50px] ">
            
                <div className=" flex justify-between">
                    <div className="flex items-center gap-x-[10px]">
                        <img src={Logo} className='w-[45px] h-[33px] ' alt="logo"/>
                        <div className="text-[30px] leading-[50px] " >
                            Protube
                        </div>
                    </div>
                    <div className="flex gap-x-[25px] items-center text-[24px]"> 
                        <div><span className="text-[#9340ff]">Credits</span> : {credits}</div>
                        <div className="btn-primary w-[170px] h-[64px] text-[20px]">
                            Buy Credits
                        </div>
                        <div className="btn-primary w-[170px] h-[64px] text-[20px]" onClick={handleLogout}>
                            Log Out
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-[full] h-[630px] p-[40px] px-[100px]  ">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/qQk94CjRvIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="text-[38px] flex items-center gap-x-[15px] mb-[60px] ">
                <img className=" w-[45px] h-[45px] "  src="https://media-public.canva.com/nDVqg/MADwfLnDVqg/3/t.png" alt="search illustration" />
                Title of Video
            </div>

            <div>
                <div className="text-[38px] flex items-center gap-x-[15px] " >
                    <img className=" w-[45px] h-[40px] "  src="https://media-public.canva.com/8TDic/MAFKG28TDic/1/t.png" alt="notes illustration" />
                    Chapter Summary
                </div>
            
                <div className="py-[30px] flex gap-x-[30px] overflow-x-scroll mx-[-150px] pl-[200px] ">
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <ChapterSummary sno="1" title="Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                </div>
            </div>

            <div className="flex flex-col gap-y-[30px] mt-[30px] ">
                <div className="text-[38px] flex items-center gap-x-[15px] " >
                    <img className=" w-[45px] h-[45px] "  src="https://media-public.canva.com/DGlDY/MAELYLDGlDY/1/t.png" alt="idea bulb illustration" />
                    Key Points 
                </div>

                <KeyPoints/>
            </div>
        </div>
  )
}
