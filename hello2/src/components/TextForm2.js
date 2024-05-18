import React from 'react'
import Button from 'react-bootstrap/Button';


import { useState } from 'react'

export default function TextForm2() {

    const uppercase=()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const lowercase=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = ()=>{
        let newText = ''
        setText(newText)
    }

   



    const handleclick = (event) =>{

        setText(event.target.value)

    }
    

    const[text,setText] =useState("Enter Text Here")



  return (
    <>
    <div className="container">
      <textarea name="" id="" value={text} onChange={handleclick} cols="30" rows="10" className="my-3 form-control"></textarea>
        <Button className='my-3' onClick={uppercase} variant="primary">Upper Case</Button>
        <Button variant="primary" onClick={lowercase} className='mx-3 my-3'>Lower  Case</Button>
        <Button variant="danger" onClick={clear} >Clear</Button>

        <p> <b> {text.split(" ").length}</b> Words and <b> {text.length} </b> Characters</p>


        <h3>Preview</h3>
        <p className='border p-3' >{text.length>0?text:"Enter something in the textbox to preview it here"}</p>


    </div>
    </>
  )
}
