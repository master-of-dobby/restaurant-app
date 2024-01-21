//import {REST_IMG_URL }from "./common/constants";

const RestaurantCard = (props) => {

    //console.log(props);
  
    //destructuring
  
    const {name, cuisines, starRating, imageUrl} = props.resDetails;
  
    return (
      <div className="res-card">
        <img className="rest-image" src={imageUrl}alt="table 9 restaurant logo" />
        <div className="rest-details">
  
          <div className="res-name-items">
            <h3> { name } </h3>
            <h4> { cuisines} </h4>
          </div>
          
          <div className="res-ratings-time">
            <h4> {starRating} </h4>
            <h4> 35 mins </h4>
          </div>
  
        </div> 
  
      </div>
    );
  }

  export default RestaurantCard;