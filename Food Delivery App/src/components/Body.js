import resList from "../utils/restro-data";
import RestaurantCard from "./RestaurantCard";
const Body=()=> {

  return (

  <div className="body">
  <h5>Search</h5>
  <div className="restro">
 {/* <ResturantCard restroData={resList[0]}/> */}
 {/* <ResturantCard restroData={resList[1]}/> */}
  {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}

 </div>
 
 
 
 </div>
  )
}

export default Body;