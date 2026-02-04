import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";



const AppComponent=()=> (
  <div className="App">
    <Header/>
    <Body/>

  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)