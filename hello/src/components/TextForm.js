import React,{useState} from 'react'
import PropTypes from "prop-types";



export default function TextForm(props) {

    const hanldeUpClick = () =>{
        // console.log("Upper Case Was Clicked !!!!");
        let newText = text.toUpperCase()
        setText(newText)
    }


    const hanldeExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }

    const hanldeClearClick = () =>{
      
        let newText = ''
        setText(newText)
    }
    const hanldeLoClick = () =>{
        // console.log("Upper Case Was Clicked !!!!");
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) =>{
        // console.log("on Change Fynction is runniing");
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter text here")


  return (

    <>
        <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Example Text Area</label> */}
        <textarea name="" id="myBox" rows="8"  value={text}  onChange={handleOnChange} className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}> </textarea> <br />
        <button className="btn btn-primary mx-1"  onClick={hanldeUpClick} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1"  onClick={hanldeLoClick} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1"  onClick={hanldeClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-1"  onClick={hanldeExtraSpaces} >Remove Extra Spaces</button>
      </div>
    </div>


    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary !!!</h1>

        <p> <b> {text.split(" ").length}</b> Words and <b> {text.length} </b> Characters</p>

        <p><b>{0.008 * text.split(" ").length} </b> Minutes For Read  </p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>

  )
}
