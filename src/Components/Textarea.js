import React,{useState} from 'react'

export default function Textarea(props) {
    const handleupclick=()=>{
            console.log("uppercase was clicked"+text);
            let newtext=text.toUpperCase();
            settext(newtext)
            props.showalerts("converted to Uppercase","sucess");
    }
    const handleloclick=()=>{
        console.log("lowercase was clicked"+text);
        let newtext=text.toLowerCase();
        settext(newtext)
        props.showalerts("converted to lowercase","sucess");
}
const handleClearclick=()=>{
    console.log("Clear was clicked"+text);
    let newtext="";
    settext(newtext)}
    const handleonChange=(event)=>{
        console.log("onchange was clicked");
        settext(event.target.value);
}
const handleCopyclick=()=>{
    console.log("i am copying");
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalerts("copy to clipbord","sucess");
}
const handleSpaceclick=()=>{
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(" "))
    props.showalerts("Remove exter space","sucess");
}
const[text, settext]=useState("Enter text here");  
return (
    <>
    <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
    <div>
        <h1>
            {props.heading}
        </h1>
    <div className="mb-3">

<input type="email" className="form-control" value={text} onChange={handleonChange} 
style={{backgroundColor:props.mode===`dark`?`#6a96c3`:`white`,color:props.mode===`dark`?`white`:`black`}} 
id="mybox" rows="8"/>
<button className="btn btn-primary mx-2"  onClick={handleupclick}>Convert to the uper  case</button>
<button className="btn btn-primary mx-2"  onClick={handleloclick}>Convert to the lower  case</button>
<button className="btn btn-primary mx-2"  onClick={handleClearclick}>Clear the text</button>
<button className="btn btn-primary mx-2"  onClick={handleCopyclick}>copy the text</button>
<button className="btn btn-primary mx-2"  onClick={handleSpaceclick}>Remove Extra space</button>
</div>

    </div>
    </div>
    <div className="container my-2" style={{color:props.mode===`dark`?`white`:`black`}}>
    <h1 text-light>your text summmery</h1>
<p>
     {text.split(" ").length} words and {text.length}character
</p>
<p> { 0.008*text.split(" ").length}  minuttes to read</p>
<h2 >preivew</h2> 
<p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>

    </>
  )
}
