import { useState } from "react";
import HolyLight from "../assets/holy.svg";

export default function Home() {

    const [credits, setCredits] = useState(100);
    const [searchText, setSearchText] = useState("");

    const onSearchTextChange = (event) => setSearchText(event.target.value);


    return (
        <body className="h-[100vh] flex flex-col relative box-border bg-[#101728] px-[150px] py-[50px] overflow-hidden text-white font-shapirit_bold " >
            <div className="flex justify-between items-center text-[28px] ">
                <div><span className="text-[#9340ff]">Welcome</span> User !!</div>
                <div className="flex gap-x-[50px] items-center"> 
                    <div><span className="text-[#9340ff]">Credits</span> : {credits}</div>
                    <div className="btn-primary w-[170px] h-[64px] text-[20px]">
                        Buy Credits
                    </div>
                </div>
            </div>
            <div className="flex justify-between h-full">
                <div className="flex flex-col justify-between opacity-81 ml-[-50px] ">
                    <div className=' relative flex justify-center w-[200px] h-[200px] '>
                        <img src={HolyLight} width={300} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[226px] h-[150 px] "  src="https://media-private.canva.com/Uw5N4/MAFkvLUw5N4/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T144940Z&X-Amz-Expires=17525&X-Amz-Signature=78f719b4f73b1529849a9ec3c0492e84fe4bbe9c3026b14513e7ff5bc63e48e4&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2019%3A41%3A45%20GMT" alt="youtube illustration" />
                    </div>

                    <div className=' relative flex justify-center w-[200px] h-[200px] '>
                        <img src={HolyLight} width={300} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"  src="https://media-private.canva.com/bgNRk/MAFkvGbgNRk/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T060411Z&X-Amz-Expires=34926&X-Amz-Signature=cba9f40f21b9fd888de46007d32fccb2c5deba911e557edef14e1debd5718bf0&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2015%3A46%3A17%20GMT" alt="youtube illustration" />
                    </div>
                </div>

                <div className=" h-[400px] w-[600px] self-center flex flex-col bg-[#7141d1] rounded-[25px] px-[30px] pt-[20px] pb-[40px] items-center justify-around ">
                    <div className="flex gap-x-[20px] text-[55px] items-center justify-center">
                        <img className=" w-[70px] h-[70px] "  src="https://media-public.canva.com/V65pU/MAFdU1V65pU/1/t.png" alt="robot icon" />
                        <div className="mt-[10px]">AI Agent</div>
                    </div>
                    <input 
                        className="w-full h-[45px] px-[20px] py-[10px] bg-white text-black font-shapirit_medium rounded-[20px] "
                        type="text"
                        placeholder="Enter YouTube video link"
                        onChange={onSearchTextChange}
                        value={searchText}
                    />
                    <div className="text-[30px] " >Credits : 25</div>
                    <div className="h-[50px] w-[240px] bg-[#ff3c5f] rounded-[20px] text-[28px]  flex items-center justify-center cursor-pointer">Get Summary</div>
                </div>

                <div className=' relative flex shrink-0 justify-center w-[250px] h-[250px] opacity-80 self-center mr-[-70px] '>
                    <img src={HolyLight} width={300} alt="Holy Light"/>
                    <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[170px]"  src="https://media-private.canva.com/lt3So/MAFkvflt3So/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T070224Z&X-Amz-Expires=30710&X-Amz-Signature=0598db77076ca659f580f18b9d43b88b6c6836f32d4846fafb664079b4c55297&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2015%3A34%3A14%20GMT" alt="youtube illustration" />
                </div>
            </div>
            
        </body>
    );
}