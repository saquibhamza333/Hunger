import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";




 
 
 const Body = () => {


 const [listOfRestaurant,setRestaurantList]= useState(restaurantList);

    return(
        <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={
            ()=>{
                 const filteredList = restaurantList.filter((res) =>
                res.data.avgRating > 4 ) ;
            
            
            setRestaurantList(filteredList);
            }
          }>Top Rated Restaurant</button>
  
        </div>
        <div className ="res-container">
          { 
          listOfRestaurant.map( (restaurant)=> 
            (
              <RestaurantCard resData ={restaurant} key={restaurant.data.id
              } />
            )
          )
  
          }
          
        </div>
  
  
        </div>
    );
  }
  export default Body;