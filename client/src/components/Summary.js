import { Link } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";

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

            <div className="w-[full] h-[650px] p-[50px] px-[100px] ">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/qQk94CjRvIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="text-[38px] flex items-center gap-x-[15px] ">
                <img className=" w-[45px] h-[45px] "  src="https://media-public.canva.com/nDVqg/MADwfLnDVqg/3/t.png" alt="notes illustration" />
                Title of Video
            </div>

            <div>

                <div className="text-[38px]" >
                    <img className=" w-[45px] h-[45px] "  src="https://media-public.canva.com/8TDic/MAFKG28TDic/1/t.png" alt="notes illustration" />
                    Chapter Summary
                </div>

                <div>

                </div>
            </div>
        </div>
  )
}
