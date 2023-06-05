import {Routes,Route} from "react-router-dom";
import Prelogin from "./components/Prelogin";
import Login from "./components/Login";
import Pricing from "./components/Pricing";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Prelogin/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/pricing" element={<Pricing/>} />
    </Routes>
  );
}

export default App;
