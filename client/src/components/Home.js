import { useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import HolyLight from "../assets/holy.svg";
import { useNavigate, Link } from "react-router-dom";
import p2 from "../assets/p2.jpeg"
import p3 from "../assets/p3.jpeg"
import p5 from "../assets/p5.jpeg"


export default function Home() {
    
    const searchTextRef = useRef();
    const { logout, user } = UserAuth();
    const navigate = useNavigate();

    const handleGetSummary = () => {
        navigate('/summary?search='+searchTextRef.current.value)
    }

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
        <div className="h-[100vh] flex flex-col relative box-border bg-[#101728] px-[150px] py-[50px] overflow-hidden text-white font-shapirit_bold " >
            <div className="flex justify-between items-center text-[28px] ">
                <div><span className="text-[#9340ff]">Welcome</span> {user.displayName} !!</div>
                <div className="flex gap-x-[25px] items-center"> 
                    <div className="text-[24px]"><span className="text-[#9340ff]">Credits</span> : {user?.credits}</div>
                    <Link to={"/history"} >
                        <div className="btn-primary w-[130px] h-[64px] text-[20px]">
                            History
                        </div>
                    </Link>
                    <Link to={"/pricing"} >
                        <div className="btn-primary w-[170px] h-[64px] text-[20px]">
                            Buy Credits
                        </div>
                    </Link>
                    <div className="btn-primary w-[130px] h-[64px] text-[20px]" onClick={handleLogout}>
                        Log Out
                    </div>
                </div>
            </div>
            <div className="flex justify-between h-full">
                <div className="flex flex-col justify-between opacity-81 ml-[-50px] ">
                    <div className=' relative flex justify-center w-[200px] h-[200px] '>
                        <img src={HolyLight} width={300} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[226px] h-[150 px] "  src={p5} alt="youtube illustration" />
                    </div>

                    <div className=' relative flex justify-center w-[200px] h-[200px] '>
                        <img src={HolyLight} width={300} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"  src={p2} alt="youtube illustration" />
                    </div>
                </div>

                <div className=" h-[400px] w-[600px] self-center flex flex-col bg-[#7141d1] rounded-[25px] px-[30px] pt-[20px] pb-[40px] items-center justify-around ">
                    <div className="flex gap-x-[20px] text-[55px] items-center justify-center">
                        <img className=" w-[70px] h-[70px] "  src="https://media-public.canva.com/V65pU/MAFdU1V65pU/1/t.png" alt="robot icon" />
                        <div className="mt-[10px]">AI Agent</div>
                    </div>
                    <input 
                        className="w-full h-[45px] px-[20px] py-[10px] bg-white text-black overflow-x-scroll font-code_pro text-[18px] rounded-[20px] "
                        type="text"
                        placeholder="Enter YouTube video link"
                        ref={searchTextRef}
                    />
                    <div className="text-[30px] " >Credits : 25</div>
                    <div className="h-[50px] w-[240px] bg-[#ff3c5f] rounded-[20px] text-[28px]  flex items-center justify-center cursor-pointer" onClick={handleGetSummary} >Get Summary</div>
                </div>

                <div className=' relative flex shrink-0 justify-center w-[250px] h-[250px] opacity-80 self-center mr-[-70px] '>
                    <img src={HolyLight} width={300} alt="Holy Light"/>
                    <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[170px]"  src={p3} alt="youtube illustration" />
                </div>
            </div>
            
        </div>
    );
}