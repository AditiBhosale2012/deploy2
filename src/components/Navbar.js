import React, { useState } from 'react'

export default function Navbar(props) {
  const handleUpclick = () => {
    console.log("button uppercase was clicked");
    settext(text.toUpperCase());
  }
  const handledownclick = () => {
    settext(text.toLowerCase());
  }
  const handlechange = (event) => {
    console.log("text changed");
    // to be able to change the text area 
    settext(event.target.value);
  }
  const cleartext = () => {
    settext("");
  }
  const [text, settext] = useState('Enter text here');
  return (
    <div>
      <div className="nav2">
        <textarea className="txttarea" value={text} onChange={handlechange} rows="10" cols="70"></textarea>
      </div>
      <div className="But-main">
        <button onClick={handleUpclick}>{props.title}</button>
        <button onClick={handledownclick}>{props.title2}</button>
        <button onClick={cleartext}>clear text</button>
      </div>
    </div>
  )
}
