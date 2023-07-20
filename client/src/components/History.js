import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";


export default function Summary() {

    const [credits, setCredits] = useState(100);
    const [history, setHistory] = useState([]);
    

    const { logout, user } = UserAuth();
    const navigate = useNavigate();


    // const count = useRef(0); //! remove on production
    useEffect(()=>{
        // if (count.current !== 0) { //! remove on production
            (async function () {
                try{
                    let idToken = await user.getIdToken(true)
                    const response = await fetch("https://protube-backend.onrender.com/api/summary/my", {
                        headers: { 'Authorization': `Bearer ${idToken}` },
                    })
                    console.log(response)
                    const json = await response.json();
            
                    if (response.ok) {
                        console.log(json)
                        setHistory(json)
                    }
                    else {
                        console.log(json.error)
                    }
                }
                catch(err) {
                    console.log(err.message);
                }
            })()
        // }
        // count.current++;  //! remove on production
    },[])

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
        <div className="h-[100vh] relative box-border flex flex-col py-[50px] bg-[#101728] px-[150px] overflow-hidden overflow-y-scroll text-white font-shapirit_bold" >
            <div className="flex flex-col pb-[50px] ">
            
                <div className=" flex justify-between">
                    <div className="flex items-center gap-x-[10px]">
                        <img src={Logo} className='w-[45px] h-[33px] ' alt="logo"/>
                        <div className="text-[30px] leading-[50px] " >
                            Protube
                        </div>
                    </div>
                    <div className="flex gap-x-[25px] items-center text-[24px]"> 
                        <div><span className="text-[#9340ff]">Credits</span> : {credits}</div>
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

            <div>
                <div className="text-[38px] flex items-center gap-x-[15px] mb-[60px] ">
                    Your Summaries
                </div>
                
                <div className="py-[30px] grid grid-cols-3 gap-y-[30px] pl-[200px] text-[28px] ">
                    { history.map((obj) => {
                        return (
                            <Link to={`/summary?search=${obj.ytLink}`}>
                                <div className="shrink-0  w-[310px] rounded-b-[35px] bg-[#9340ff] pb-[40px] cursor-pointer font-shapirit_bold overflow-hidden "> {/*h-[400px] */}
                                    <img src = {obj.thumbnail.url} alt={obj.title} width={obj.thumbnail.width} height={obj.thumbnail.height} className="" />
                                    <h2 className="px-[35px] pt-[20px] ">
                                        {obj.title} 
                                    </h2>
                                </div>
                            </Link>
                        );
                    }) }
                    
                    <Link to="/">
                        <div className="shrink-0 h-[370px] w-[310px] rounded-[40px] px-[35px] py-[25px] bg-[#9340ff] flex flex-col items-center justify-center gap-y-[15px] text-center cursor-pointer">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="160px" width="160px" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"></path></svg>
                            <div>Generate New Summary</div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
  )
}
