import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import HolyLight from "../assets/holy.svg";
import LinkedIn from "../assets/linkedin.svg";
import Insta from "../assets/insta.svg";
import Fb from "../assets/fb.svg";
import Twitter from "../assets/twitter.svg";

export default function Prelogin() {


    return(
        <div className="relative box-border bg-[#101728] px-[150px] overflow-hidden text-white font-shapirit_bold" >
            <div className=" h-[100vh] flex flex-col py-[50px] ">
               
                <div className=" flex justify-between">
                    <div className="flex items-center gap-x-[10px]">
                        <img src={Logo} className='w-[45px] h-[33px] ' alt="logo"/>
                        <div className="text-[30px] leading-[50px] " >
                            Protube
                        </div>
                    </div>
                    <div className="flex gap-x-[15px] text-[20px]">
                        <Link to={"/login"}>
                            <div className="btn-primary w-[170px] h-[64px] ">
                                Login
                            </div>
                        </Link>
                        <Link to={"/pricing"}>
                            <div className="btn-primary w-[170px] h-[64px] ">
                                Pricing
                            </div>
                        </Link>  
                    </div> 
                </div>
                
                <div className="flex  w-[100%] pt-[30px]">
                    <div className="flex flex-col w-[40%] self-center">
                        <div className="text-[75px] leading-[85px]">
                            Unlock the Power of Video Knowledge
                        </div>
                        <Link to={"/login"}>
                            <div className="text-[25px] mt-[60px] ml-[50px] h-[70px] w-[235px] btn-primary">
                                Get Started 
                            </div>
                        </Link>
                    </div>
                    <div className='w-[60%] relative flex justify-center ml-[60px]'>
                        <img src={HolyLight} width={600} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"  src="https://media-private.canva.com/PgrBM/MAFkvfPgrBM/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T120254Z&X-Amz-Expires=79416&X-Amz-Signature=d33c040c836f00cfed4ef6f4a671eaf38ddc9260fb2683c7121d8bc318e89398&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2010%3A06%3A30%20GMT" alt="youtube illustration" />
                    </div>
                </div>

            </div>
            <div className="h-[100vh] flex flex-col pt-[70px] ">

                <div className="flex gap-x-[20px]">
                    <img src={Logo} className='w-[45px] h-[33px] mt-[10px] ' alt="logo"/>
                    <div className= "text-[45px] leading-[55px] " ><span className="text-[#9340ff]">Protube</span> is the ultimate solution for anyone who wants to extract maximum value from <span className="text-[#9340ff]">YouTube videos</span> without spending hours watching them.</div>
                </div>

                <div className="flex gap-x-[20px] justify-center items-center ">
                    <div className= "text-[25px] leading-[40px] text-center pl-[130px] font-shapirit_medium " >We understand that your <span className="text-[#9340ff]">time</span> is valuable, and that's why we've developed an innovative SAAS product that revolutionizes the way you <span className="text-[#9340ff]">consume</span> video content.</div>
                    <div className=' relative flex justify-center mr-[-50px]  '>
                        <img src={HolyLight} width={700} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"  src="https://media-private.canva.com/bgNRk/MAFkvGbgNRk/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T060411Z&X-Amz-Expires=34926&X-Amz-Signature=cba9f40f21b9fd888de46007d32fccb2c5deba911e557edef14e1debd5718bf0&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2015%3A46%3A17%20GMT" alt="youtube illustration" />
                    </div>
                </div>

                <div className="flex items-center mt-[-70px] relative ">
                    <div className=' relative flex shrink-0 justify-center ml-[-20px] w-[20%] '>
                        <img src={HolyLight} width={250} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px]"  src="https://media-private.canva.com/lt3So/MAFkvflt3So/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T070224Z&X-Amz-Expires=30710&X-Amz-Signature=0598db77076ca659f580f18b9d43b88b6c6836f32d4846fafb664079b4c55297&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2015%3A34%3A14%20GMT" alt="youtube illustration" />
                    </div>
                    <Link to={"/signup"}>
                        <div className="btn-primary w-[200px] h-[64px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] ">
                            Sign up now  
                        </div>
                    </Link>
                </div>

            </div>

            <div className="h-[100vh] flex flex-col pt-[30px] gap-y-[30px] ">
                <div className='text-center text-[55px]'>Key Features</div>
                <div className="flex gap-x-[60px] text-[18px]  " >
                    <div className="flex flex-col justify-around gap-y-[20px] ">
                        <div className=" flex justify-center items-center self-center  w-[230px] h-[230px] p-[10px] bg-[#9340ff] rounded-full">
                            <img className=" w-[177px] h-[127px] "  src="https://media-public.canva.com/49AsY/MAFf8F49AsY/1/t.png" alt="youtube illustration" />
                        </div>
                        <div className="flex flex-col  justify-center border-2 border-white p-[25px] rounded-[20px] text-center"> Our intelligent algorithm breaks down YouTube videos into chapters, allowing you to navigate through the content effortlessly. Each chapter comes with a concise summary, providing you with a structured overview of the video's key points. </div>
                    </div>
                    <div className="flex flex-col justify-around gap-y-[20px] ">
                        <div className=" flex justify-center items-center self-center  w-[230px] h-[230px] p-[10px] bg-[#9340ff] rounded-full">
                            <img className=" w-[127px] h-[127px] "  src="https://media-public.canva.com/uQqqc/MAEqtVuQqqc/1/t.png" alt="notes illustration" />
                        </div>
                        <div className="flex flex-col  justify-center border-2 border-white p-[25px] rounded-[20px] text-center"> We distill the most crucial insights from each video and present them in a clear and concise manner. No more digging through hours of footage to find the golden nuggets of information. With Protube, you'll get the key takeaways at your fingertips.</div>
                    </div>
                    <div className="flex flex-col justify-around gap-y-[20px] ">
                        <div className=" flex justify-center items-center self-center  w-[230px] h-[230px] p-[20px] bg-[#9340ff] rounded-full">
                            <img className=" w-[168px] h-[168px] mt-[-15px] "  src="https://media-public.canva.com/1sx7o/MAEqtS1sx7o/1/t.png" alt="recommendation illustration" />
                        </div>
                        <div className="flex flex-col  justify-center border-2 border-white p-[25px] rounded-[20px] text-center"> Our advanced recommendation engine understands your interests and preferences, delivering personalized video suggestions tailored to your needs. Discover new content that aligns with your interests and expand your knowledge in just a few clicks.</div>
                    </div>
                </div>
            </div>

            <div className="h-[100vh] flex flex-col pt-[50px] gap-y-[20px] ">
                <div className="flex items-center gap-x-[10px]">
                    <img src={Logo} className='w-[45px] h-[33px] ' alt="logo"/>
                    <div className="text-[30px] leading-[50px] text-[#9340ff] " >
                        Protube
                    </div>
                </div>

                <div className="flex gap-x-[20px] ">
                    <div className="text-[25px] leading-[45px] font-shapirit_medium text-center pl-[120px] pr-[30px] " >Try <span className="text-[#9340ff]">Protube</span> today and unlock a new world of efficient and impactful video learning. Join our community of learners who are transforming the way they <span className="text-[#9340ff]">consume information</span>. Sign up now for a free trial and experience the power of knowledge at fingertips</div> 

                    <div className=' relative flex justify-center mr-[-80px] mt-[-180px] '>
                        <img src={HolyLight} width={880} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[178px] h-[178px] "  src="https://media-private.canva.com/eo8lQ/MAFkvbeo8lQ/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T175937Z&X-Amz-Expires=91827&X-Amz-Signature=196db2abd251b43d660d6ee8025f357c7450760c37a99c5c77de4f017812953b&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2019%3A30%3A04%20GMT" alt="youtube illustration" />
                    </div>
                </div>

                <Link to={"/signup"} className="self-center">
                    <div className="text-[25px]  h-[70px] w-[200px] btn-primary self-center">
                        Try Free  
                    </div>
                </Link>

                <div className="flex justify-between">
                    <div className=' relative flex justify-center ml-[-60px] '>
                        <img src={HolyLight} width={300} alt="Holy Light"/>
                        <img className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[226px] h-[150 px] "  src="https://media-private.canva.com/Uw5N4/MAFkvLUw5N4/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230603T144940Z&X-Amz-Expires=17525&X-Amz-Signature=78f719b4f73b1529849a9ec3c0492e84fe4bbe9c3026b14513e7ff5bc63e48e4&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2003%20Jun%202023%2019%3A41%3A45%20GMT" alt="youtube illustration" />
                    </div>

                    <div className="flex flex-col w-[500px]  " >
                        <div className="text-[#9340ff] text-[52px] ">Connect with us</div>

                        <div className=" text-[26px] font-shapirit_medium ">Join Our Community to get instant updates</div>

                        <div className="flex gap-x-[30px] px-[40px] py-[20px] ">
                            <img className="cursor-pointer" src={LinkedIn} width={50} alt="Holy Light"/>
                            <img className="cursor-pointer" src={Insta} width={50} alt="Holy Light"/>
                            <img className="cursor-pointer" src={Fb} width={22} alt="Holy Light"/>
                            <img className="cursor-pointer" src={Twitter} width={51} alt="Holy Light"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}