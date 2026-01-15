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

const ResturantCardComponent=()=>{
  return (
    <div className="resto-card">
      <img  className="photo" src="https://t4.ftcdn.net/jpg/09/28/82/47/360_F_928824793_tdXEOOB4ItBHAQZuxIVtc4CzsDCJgr07.jpg"/>
      
      <h4>Meghna Food Resturant</h4>
      <h5>NorthIndian, Briyani</h5>
      <h5>4.4 Star</h5>
    </div>
  )
}

const BodyComponent=()=>{
  return(
    <div className="body">
  <h5>Search</h5>
  <div className="restro">
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 <ResturantCardComponent/>
 </div>
 
 
 
 </div>
  )
}


const AppComponent=()=>(
  <div className="App">
    <HeaderComponent/>
    <BodyComponent/>

  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)