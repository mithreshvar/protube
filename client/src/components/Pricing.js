import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Pricing () {

    const { user } = UserAuth();

    return (
        <div className="h-[100vh] flex flex-col relative box-border bg-[#101728] px-[150px] py-[50px] gap-y-[50px] overflow-hidden text-white font-shapirit_bold " >
            <div className="text-[55px] text-center leading-[50px] ">Pricing</div>
            <div className="flex justify-around items-center">

                <div className=" h-[500px] w-[350px] self-center flex flex-col bg-[#9340ff] border-[5px] border-white rounded-[35px] px-[40px] py-[30px] items-center gap-y-[20px] ">
                    <div className="text-center">
                        <div className="text-[50px]">Basic</div>
                        <div className="text-[50px]">$ 5</div>
                        <div className="text-[15px] font-shapirit_medium">Per 500 Credits</div>
                    </div>

                    <div className="flex flex-col justify-around h-full w-full">
                        <div className="flex gap-x-[15px] text-[20px] leading-[25px] items-center ">
                            <img className=" w-[30px] h-[30px] mt-[-7px] "  src="https://media-public.canva.com/KzJ8Q/MAAQomKzJ8Q/2/t.png" alt="check box" />
                            <div>Free 100 credits</div>
                        </div>
                        <div className="flex gap-x-[15px] text-[20px] leading-[25px] items-center ">
                            <img className=" w-[30px] h-[30px] mt-[-7px] "  src="https://media-public.canva.com/KzJ8Q/MAAQomKzJ8Q/2/t.png" alt="check box" />
                            <div>Store your summary</div>
                        </div>
                        <div className="flex gap-x-[15px] text-[20px] leading-[25px] items-center ">
                            <img className=" w-[30px] h-[30px] mt-[-7px] "  src="https://media-public.canva.com/KzJ8Q/MAAQomKzJ8Q/2/t.png" alt="check box" />
                            <div>Store your summary</div>
                        </div>
                    </div>

                    <Link to={ user ? "" : "/signup" }>
                        <div className="h-[45px] w-[140px] bg-[#ff3c5f] rounded-[20px] text-[18px]  flex items-center justify-center cursor-pointer">Buy</div>
                    </Link>
                    
                </div>

                <div className=" h-[500px] w-[350px] self-center flex flex-col bg-[#9340ff] border-[5px] border-white rounded-[25px] px-[40px] py-[30px] items-center gap-y-[20px] ">
                    <div className="text-center">
                        <div className="text-[50px]">Life Time</div>
                        <div className="text-[50px]">$ 10</div>
                    </div>

                    <div className="flex flex-col justify-around h-full w-full">
                        <div className="flex gap-x-[15px] text-[20px] leading-[25px] items-center ">
                            <img className=" w-[30px] h-[30px] mt-[-7px] "  src="https://media-public.canva.com/KzJ8Q/MAAQomKzJ8Q/2/t.png" alt="check box" />
                            <div>Unlimited credits</div>
                        </div>
                        <div className="flex gap-x-[15px] text-[20px] leading-[25px] items-center ">
                            <img className=" w-[30px] h-[30px] mt-[-7px] "  src="https://media-public.canva.com/KzJ8Q/MAAQomKzJ8Q/2/t.png" alt="check box" />
                            <div>Unlimited Summary generation</div>
                        </div>
                        <div className="flex gap-x-[15px] text-[20px] leading-[25px] items-center ">
                            <img className=" w-[30px] h-[30px] mt-[-7px] "  src="https://media-public.canva.com/KzJ8Q/MAAQomKzJ8Q/2/t.png" alt="check box" />
                            <div>Unlimited Storage benefits</div>
                        </div>
                    </div>

                    <Link to={ user ? "" : "/signup" }>
                        <div className="h-[45px] w-[140px] bg-[#ff3c5f] rounded-[20px] text-[18px]  flex items-center justify-center cursor-pointer">Buy</div>
                    </Link>

                </div>

            </div>
        </div>
    );
}