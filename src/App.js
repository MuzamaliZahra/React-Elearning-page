
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginPage/Login';
import SignUp from './SignUpPage/SignUp';
import About from './HomePage/About';
import Home from "./HomePage/Home";
import Contact from "./HomePage/Contact";
import MentorPrfl from "../src/Mentor/MentorPrfl";
import MenteeProfile from "../src/Mentee/MenteeProfile";
import Popup from "../src/Popup/Popup";
import Frame from "./frame/Frame";

import Instruction from "./Instruction/Instruction";
import MCQ from "./MCQ/MCQ";
import Que_Selection from "./Que_Selection/Que_Selection";







function App() {
  return (
<div className="font">
    <BrowserRouter>
    <Routes>
      
              <Route path="/" element={<Home/>}/>
        <Route path="/sign" element={<SignUp />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
     <Route path="/mentorPrfl" element={<MentorPrfl/>}/>
     <Route path="/MenteeProfile" element={<MenteeProfile/>}/>
     <Route path="/pop" element={<Popup/>}/>

     <Route path="/frame" element={<Frame/>}/>

     <Route path="/Instruction" element={<Instruction/>}/>
     <Route path="/MCQ" element={<MCQ/>}/>
     <Route path="/Que_Selection" element={<Que_Selection/>}/>
    
     

     
    </Routes>
  </BrowserRouter>
   </div>
  
  );
}

export default App;
