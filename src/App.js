
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [modes,setModes]=useState("light");
  function toggleMode(){
    if(modes==='light'){
      setModes('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setModes('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    
    <>
    <Router>
    
    
    <Navbar title='TextUtils' mode={modes} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Routes>
          <Route  exact path="/about" element={<About/>}/>
            
          
          
          <Route exact path="/" element={<TextForm heading='Enter the text to analyze below'/>}/>
          
          
        </Routes>
      
         
   
    
    
    
    
    
    </div>
    </Router>
    
      
      
    
    </>
    


  );
}

export default App;
