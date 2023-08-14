import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text,setText]=useState("");
    function handleUpClick(){
        let newText=text.toUpperCase()
        setText(newText)
    }
    function handleOnChange(e){
        setText(e.target.value)
    }
    function handleLoClick(){
        let newText1=text.toLowerCase()
        setText(newText1)
    }
    function handleClClick(){
        let newText2=" ";
        setText(newText2)
    }
    function handleCopy(){
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    function handleExtraSpaces(){
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }
  return (
    <>
    <div className='Container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>

  
</div>
<div className='btns'>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClClick}>Clear</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
</div>
<div className='Container my-3' style={{color:props.mode==='dark' ?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split("").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
</div>

</>
  )
}

export default TextForm