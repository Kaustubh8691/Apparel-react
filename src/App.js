import React, { useState } from 'react'
import "./App.css"
import img1 from "./images/Rectangle 41/Rectangle.png"
const App = () => {
  const [email,setEmail]=useState("")
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(email===""){
      alert("Input field is empty")
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
     console.log( 'Invalid email address')
     alert( 'Email address is not format correctly')
    }
    else{
      alert("submitted")
      setEmail("")}
    console.log('form submitted ✅');
   
    

  }
  return (
    <div className='container'>
       <div className="container">
      <div className="header">
        <div className="heading">
          <div id="circle"></div>
          <div id="heading">BASE APPAREL</div>
        </div>
        <div className="croppeing">
          <img src={img1} alt="mainphoto" />
        </div>
      </div>

      <div id="main-container">
        <div className="head1">WE'RE</div>
        <div id="subhead">COMING SOON</div>
        <div className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem psum has been the industry's standard dummy Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
        <div id="inputbox">
          <form onSubmit={handlesubmit}>
            <input 
            type="email"
            value={email}
             placeholder="Email Address"
              onChange={(e)=>setEmail(e.target.value)} />
            <button type='submit' >{">"}</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App