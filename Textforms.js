import React, {useState} from 'react'
 
export default function Textforms(props) {
     const handleupClick = ()=> {
          console.log("uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("converted to uppercase!", "success");
     }
     const handleClearClick = ()=> {
          let newText = '';
          setText(newText)
     }
     const handleloClick = ()=> {
          console.log("lowercase was clicked" + text);
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("converted to lowercase!", "success");
     }
     const handleOnChange= (event)=> {
        console.log("On Changed ");
        setText(event.target.value);
   }

    const [text, setText] = useState(' ');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
      <div className="mb-3" >
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?' #181212':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
         <button disabled={text.length===0} className="btn-primary mx-1 my-2" onClick={handleupClick} >Convert to uppercase</button>
         <button disabled={text.length===0} className="btn-primary mx-1 my-2" onClick={handleloClick} >Convert to lowercase</button>
         <button disabled={text.length===0} className="btn-primary mx-1 my-2" onClick={handleClearClick} >Clear Text</button>
    </div>
    </div>
   <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter(word => word !== '').length} word and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p> 
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    
   </div>
    </>
  )
}

