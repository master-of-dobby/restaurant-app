import RestaurantCard from "./RestaurantCard";
import restaurants from "./common/mockData";
import { useEffect, useState } from "react";


function filterData(searchText, restaurants){

  return restaurants.filter(restaurant =>
     restaurant.name.toLowerCase().includes(searchText.toLowerCase()));
     //restaurant.cuisines.includes(searchText));

}




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
    const data = restaurants;
    setAllRestaurants(data);
    setFilteredRestaurants(data);
  }

    return (
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
            {console.log(allRestaurants)}
            {
              filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resDetails = {restaurant} />)
            }
          </div>
        </div>
      </>
    )
  }

  export default Body;