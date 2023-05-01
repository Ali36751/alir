
//import { useImperativeHandle, useState } from 'react';
import './App.css';
import React,{useState} from 'react';
//import About from './Components/About'; <About/>
import Navbar from './Components/Navbar';
import Teaxtarea from './Components/Textarea';
import About from './Components/About'
import Alerts from './Components/Alerts'
//import {
 // BrowserRouter as Router,
  //Routes,
  //Route,
 // Link
//} from "react-router-dom";
let name= "ali";

function App() {       
const [mode , setmode]=useState('light'); 
const [alerts,setalerts]=useState(null);
const showalerts=(message,type)=>
{
setalerts({
  msg:message,
  type:type
})
setTimeout(
  ()=>{
    setalerts(null);
  },1500
);
}
const togglemode=()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.background='#6a96c3';
    showalerts("dark mode has been enable","sucess");
    document.title='textutils - dark mode';
  // setInterval(() => {
   // document.title='textutils is amazing';
   //},2000);
   //setInterval(() => {
   // document.title='textutils dowload now';
   // }, 1500);
  }
  else{
    setmode('light');
    document.body.style.background='white';
    showalerts("light mode has been enable","sucess");
    document.title='textutils - light mode';
  }
}
  return (
   <>

  <Navbar title="texttuils" mode={mode} togglemode={togglemode}/>
  <Alerts alerts={alerts}/>
  <div className="container my-3">
  {/*<Router>
  <Routes>
           
          <Route path="/about" element={<About/>}>
</Route>
         
          <Route path="/teaxtarea" element={<Teaxtarea showalerts={showalerts} heading="Enter text to anylize below" mode={mode}/>}>
           
           
          </Route>
        </Routes>
 
    </div>
  </Router> */}
  <Teaxtarea showalerts={showalerts} heading="Enter text to anylize below" mode={mode}/>
  </div>
     </>
  );
}

export default App;
