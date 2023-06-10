import { useRef, useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom";

import Dots from "../assets/dots.svg";
import google from "../assets/google.jpeg"

export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { login, user, googleSignIn } = UserAuth();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            setLoading(true);
            await login(emailRef.current.value,passwordRef.current.value);
            navigate('/');
        }
        catch (error){
            console.log(error.message);
            setError("Invalid Credentials !");
        }
        setLoading(false);
    }

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }
        catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        if ( user != null ) {
            console.log("signed in with google!");
            navigate("/");
        }
    },[user]);

    return (
        <div className="h-[100vh] flex flex-col gap-y-[20px] relative box-border bg-[#101728] px-[150px] py-[50px] overflow-hidden text-white font-shapirit_bold justify-center items-center" >
            <div className=" h-[500px] w-[600px] self-center flex flex-col bg-[#7141d1] rounded-[25px] px-[30px] pt-[20px] pb-[40px] items-center justify-around ">
                <div className="mt-[10px] text-[40px]">Login to your Account</div>
                <div className=" flex  items-center justify-center  gap-x-[10px] w-[260px] h-[42px] px-[20px] py-[10px] bg-white text-black rounded-[20px] font-shapirit_medium cursor-pointer" onClick={handleGoogleSignIn}>
                    <img className="h-[25px] w-[25px] "  src={google} alt="youtube illustration" />
                    <div>Continue with Google</div>
                </div>
                <img src={Dots} className='w-[400px] h-[10px] ' alt=""/>
                <form className="flex flex-col gap-y-[30px] items-center" onSubmit={handleLogin}>
                    <input 
                        className="w-[400px] h-[45px] px-[20px] py-[10px] bg-white text-black font-shapirit_medium rounded-[20px] "
                        type="text"
                        placeholder="Email"
                        ref={emailRef}
                    />
                    <input 
                        className="w-[400px] h-[45px] px-[20px] py-[10px] bg-white text-black font-shapirit_medium rounded-[20px] "
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                    />
                    { error && <div>{error}</div> }
                    <button type="submit" disabled={loading} className="bg-[#ff3c5f] rounded-[20px] text-[22px]  flex items-center justify-center cursor-pointer w-[170px] h-[45px] ">
                        Login
                    </button>
                </form>                
            </div>
            <div>Don't Have an Account? Create One <Link to="/signup" className="text-cyan-400 hover:text-cyan-600">Here!</Link> </div>
        </div>

    );
}