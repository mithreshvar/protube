import {Routes,Route, Navigate} from "react-router-dom";
import Prelogin from "./components/Prelogin";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import SignUp from "./components/SignUp";
import { UserAuth } from "./context/AuthContext";
import Home from "./components/Home";
import Summary from "./components/Summary";


function App() {

  const { user } = UserAuth();

  return (
    <Routes>
      { user ? <Route path="/" element={<Home/>} /> : <Route path="/" element={<Prelogin/>} />}
      <Route path="/signup" element={ !user ? <SignUp/> : <Navigate to='/' /> } />
      <Route path="/login" element={ !user ? <Login/> : <Navigate to='/' /> } />
      { user && <Route path="/summary" element={<Summary/>} /> }
      <Route path="/pricing" element={<Pricing/>} />
    </Routes>
  );
}

export default App;
