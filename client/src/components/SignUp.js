import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Dots from "../assets/dots.svg";

export default function SignUp() {

    const { user, createUser, googleSignIn } = UserAuth();

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value === confirmPasswordRef.current.value) {

            setError('');
            try {
                setLoading(true);
                await createUser(emailRef.current.value,passwordRef.current.value)
                navigate('/home')
            }
            catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        else {
            setError("Password don't match !");
        }
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
        if (user !=null) {
            console.log("signed in with google!");
            navigate("/");
        }
    },[user]);

    return (
        <div className="h-[100vh] flex flex-col gap-y-[20px] relative box-border bg-[#101728] px-[150px] py-[50px] overflow-hidden text-white font-shapirit_bold justify-center items-center" >
            <div className=" h-[500px] w-[600px] self-center flex flex-col bg-[#7141d1] rounded-[25px] px-[30px] pt-[20px] pb-[40px] items-center justify-around ">
                <div className="mt-[10px] text-[40px]">Create your Account</div>
                <div className=" flex  items-center justify-center  gap-x-[10px] w-[260px] h-[42px] px-[20px] py-[10px] bg-white text-black rounded-[20px] font-shapirit_medium cursor-pointer" onClick={handleGoogleSignIn}>
                    <img className="h-[25px] w-[25px] "  src="https://media-private.canva.com/brYxU/MAFk2MbrYxU/1/s.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230604T225305Z&X-Amz-Expires=56416&X-Amz-Signature=9723a1f6fe5474c38d165a119540d611e9eff8a3f86b0f3c56e96228a0672936&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2005%20Jun%202023%2014%3A33%3A21%20GMT" alt="youtube illustration" />
                    <div>Continue with Google</div>
                </div>
                <img src={Dots} className='w-[400px] h-[10px] ' alt=""/>
                <form className="flex flex-col gap-y-[17px] items-center" onSubmit={handleSubmit}>
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
                    <input 
                        className="w-[400px] h-[45px] px-[20px] py-[10px] bg-white text-black font-shapirit_medium rounded-[20px] "
                        type="password"
                        placeholder="Confirm Password"
                        ref={confirmPasswordRef}
                    />
                    { error && <div>{error}</div> }
                    <button type="submit" disabled={loading} className="bg-[#ff3c5f] rounded-[20px] text-[22px]  flex items-center justify-center cursor-pointer w-[170px] h-[45px] " >
                        Sign Up
                    </button>
                </form>                
            </div>
            <div>Already Have an Account? Log In <Link to="/login" className="text-cyan-400 hover:text-cyan-600">Here!</Link> </div>
        </div>

    );
}