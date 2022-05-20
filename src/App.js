import React from "react"

import {
  BrowserRouter as Roter,
  Route,
  Routes}
  from  'react-router-dom'
// import Home from './Pages/HomePage/HomePage'
import Menu from "./Components/Menu/Menu";
import Contact from "./Pages/ContactPage/Contact";
import Register from "./Pages/Register/Register";
// import About from "./Pages/AboutPage/AboutPage";
// import Corona from "./Pages/CoronaPage/Corona";

export default function App() {
  return (
       <Roter>
         <Menu />
           <Routes>
             {/* <Route path="/Home" element={<Home />}/> */}
             {/* <Route exact path="/AboutPage" element={<About/>}/> */}
             <Route exact path="/Contact" element={<Contact/>} />
             {/* <Route exact path="/Corona" element={<Corona/>}/> */}
             <Route exact path="/Register" element={<Register/>}/>
           </Routes>
       </Roter>
  );
}


