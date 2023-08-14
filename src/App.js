
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


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
    <Navbar title='TextUtils' mode={modes} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading='Enter the text to analyze below'/>
    {/*<About/>*/}
    </div>
      
      
    
    </>
  );
}

export default App;
