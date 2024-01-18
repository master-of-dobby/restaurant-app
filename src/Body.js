import RestaurantCard from "./RestaurantCard";
import restaurants from "./common/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./common/useOnlineStatus";
import { filterData } from "./common/Helper";


// React Hook ---> simple JS function

export const Body = () => {

  console.log("render");
  
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  // let searchText = "navaash";

  //State varaibles ----> why we use state?
  //React monitors state variables and then renders the page

  useEffect(() => {
    getRestaurants();
  }, []);

  //useEffect take two params ---> callback function  dependency array

  async function getRestaurants(){

    setTimeout(() => {
      const data = restaurants;
      setAllRestaurants(data);
      setFilteredRestaurants(data);
    }, 3000);
   
  }

    const isOnline = useOnlineStatus();

    if(!isOnline){
      return <h1>Offline :() Please Check your Internet Connection!</h1>
    }

    return filteredRestaurants.length === 0 ? 
    (<Shimmer/>)
    : (
      <>
        <div className="Body">
          <div className="search">
            <input type="text" 
                onChange={ (e) => setSearchText(e.target.value)}
                placeholder="search" 
                className="search"
                value={searchText}
              ></input>
            <button onClick = { () => {
                const data = filterData(searchText, allRestaurants);

                //console.log(data);

                setFilteredRestaurants (data);

            }} className="search-btn">Search</button>
          </div>
          <div className="res-container">
            {
              filteredRestaurants.map((restaurant => {
                return (
                  <Link to={"restaurant/" + restaurant.id}>
                      <RestaurantCard key={restaurant.id} resDetails = {restaurant} />
                  </Link>
                );
              }
              ))
            }
          </div>
        </div>
      </>
    )
  }

  export default Body;