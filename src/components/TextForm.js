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
  return (
    <>
    <div className='Container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8" ></textarea>

  
</div>
<div className='btns'>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClClick}>Clear</button>
</div>
</div>
<div className='Container'>
    <h1>Your text summary</h1>
    <p>{text.split("").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

</>
  )
}

export default TextForm