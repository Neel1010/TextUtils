import React, { useState } from 'react'
import './TextUtils.css'
function TextUtils(props) {
    const [text, setText] = useState("")
    const onchange=(event)=>{
        setText(event.target.value)
    }
    const upperCaseConvert=()=>{
        setText(text.toUpperCase())

        
    }
    const lowerCaseConvert=()=>{
        setText(text.toLocaleLowerCase())
    }
    const speakText=()=>{
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
    

    return (
        
        <div className="container" style={props.theme.style}>
            <h2 className="my-3" >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={props.theme.style} id="exampleFormControlTextarea1" rows="6" onChange={onchange} placeholder='Enter text here' value={text}></textarea>
            </div>
            <div className="buttons">
                <button type="button" className="btn btn-primary mx-2" onClick={upperCaseConvert}>Upper Case</button>
                <button type="button" className="btn btn-primary mx-2" onClick={lowerCaseConvert}>Lower Case</button>
                <button type="button" className="btn btn-primary mx-2" onClick={speakText}>Speak text</button>
                

            </div>
            <div className="container my-4">
                <h3>Your text summary:</h3>
                <p>
                    <b>Words: </b> {text=="" ? 0: text.trim().split(" ").length} 
                    <br />
                    <b>Characters:</b> {text.trim().replace(" ","").length}
                </p>
                <h3>Preview:</h3>
                <p>{text}</p>
    
            </div>
        </div>

    );
}
export default TextUtils;