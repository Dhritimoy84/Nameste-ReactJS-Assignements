import React from "react";
import ReactDOM from "react-dom/client";



const HeadingComponent = ()=><h1>Hello, I am functional heading</h1>;

const HeaderComponent = ()=>(
  <div id="container">
  <HeadingComponent/>
  <h1>I am learning ReactJS</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)