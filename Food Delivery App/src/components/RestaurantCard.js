import { IMG_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
   const { resData } = props;

  const {
    name,
    cuisines,
    address,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="resto-card">
      <img  className="photo" src={IMG_URL}/>
      
      <h4>{name}</h4>
       <h5>{cuisines.join(" , ")}</h5>
      {/* <h5>{address}</h5> */}
      <h5>{avgRating} Star</h5>
      <h5>{deliveryTime} minutes</h5> 
    </div>
  )
}

export default RestaurantCard;