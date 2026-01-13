import React from "react";
import ReactDOM from "react-dom/client";



const HeaderComponent=()=>{
  return(
    <div className="header">
      <div className="logo-container">
      <img 
      className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ27dr_0xPZC-X8dYTaK8GPU_AJqqdco6jww&s"
      />
      </div>

<div className="nav-items">
   <ul>
      <li>Home </li>
      <li>About Us </li>
      <li>Contact Us</li>
      <li>Cart </li>
    </ul>
  
</div>
    </div>
  )
}


const AppComponent=()=>(
  <div className="App">
    <HeaderComponent/>
    {/* <BodyComponent/> */}

  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)