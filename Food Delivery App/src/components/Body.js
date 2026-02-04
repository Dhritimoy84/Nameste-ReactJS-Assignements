import resList from "../utils/restro-data";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/restro-data";


const Body=()=> {
  
const [listResturant, setListResturant]= useState(resList)
  return (

  <div className="body">
  <button className="btn" onClick={()=>{
    const filteredResData = listResturant.filter((restroData)=>restroData.data.avgRating>4.2)
    setListResturant(filteredResData);
  }}>Top Rated Resturant</button>
  <div className="restro">

  {listResturant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

 </div>
 
 
 
 </div>
  )
}

export default Body;