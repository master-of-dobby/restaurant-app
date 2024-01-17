import React from "react";
// import  ReactDOM  from "react";

/*
    Header
        - Logo
        - nav Bar Items
    Body
        - Search
        - RestaurantContainer
            - RestaurantCards
    Footer
        - Copyright
        - Links
*/

//procs => properties passed to components

const Header = () => {
  return(
    <div className="header">
        <div className="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/019/771/626/non_2x/inspiring-restaurant-logo-abstract-creative-logotype-spoon-fork-and-knife-icon-in-a-circle-classic-vintage-and-modern-logo-illustration-business-company-logo-template-vector.jpg" alt="restaurant-logo"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#Cards">Card</a></li>

          </ul>
        </div>

    </div>

  )
}

const restaurants  = 
[
  {
    "id" : "12",
    "name" : "Di Table 9",
    "cuisines" : ["Chineese ", "Indian ", "Italian " ],
    "ratings" : 4.56,
  },

  {
    "id" : "13",
    "name" : "Kwality Spcicy",
    "cuisines" : ["Chineese ", "Indian " ],
    "ratings" : 4.26,
  },

  {
    "id" : "15",
    "name" : "Mc Donalds",
    "cuisines" : [ "Indian " , "American ", "Italian "],
    "ratings" : 4.32,
  },

  {
    "id" : "12",
    "name" : "Di Table 9",
    "cuisines" : ["Chineese ", "Indian ", "Italian " ],
    "ratings" : 4.56,
  },

  {
    "id" : "13",
    "name" : "Kwality Spcicy",
    "cuisines" : ["Chineese ", "Indian " ],
    "ratings" : 4.26,
  },

  {
    "id" : "15",
    "name" : "Mc Donalds",
    "cuisines" : [ "Indian " , "American ", "Italian "],
    "ratings" : 4.32,
  },
  {
    "id" : "12",
    "name" : "Di Table 9",
    "cuisines" : ["Chineese ", "Indian ", "Italian " ],
    "ratings" : 4.56,
  },

  {
    "id" : "13",
    "name" : "Kwality Spcicy",
    "cuisines" : ["Chineese ", "Indian " ],
    "ratings" : 4.26,
  },

  {
    "id" : "15",
    "name" : "Mc Donalds",
    "cuisines" : [ "Indian " , "American ", "Italian "],
    "ratings" : 4.32,
  },
  {
    "id" : "12",
    "name" : "Di Table 9",
    "cuisines" : ["Chineese ", "Indian ", "Italian " ],
    "ratings" : 4.56,
  },

  {
    "id" : "13",
    "name" : "Kwality Spcicy",
    "cuisines" : ["Chineese ", "Indian " ],
    "ratings" : 4.26,
  },

  {
    "id" : "15",
    "name" : "Mc Donalds",
    "cuisines" : [ "Indian " , "American ", "Italian "],
    "ratings" : 4.32,
  },

]


const RestaurantCard = (props) => {

  console.log(props);

  //destructuring

  const {name, cuisines, ratings} = props.resDetails;

  return (
    <div className="res-card">
      <img className="rest-image" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/6c/f7/e4/getlstd-property-photo.jpg?w=1200&h=-1&s=1" alt="table 9 restaurant logo" />
      <div className="rest-details">

        <div>
          <h3> { name } </h3>
          <h4> { cuisines} </h4>
        </div>
        
        <div>
          <h4> {ratings} </h4>
          <h4> 35 mins </h4>
        </div>

      </div> 

    </div>
  );
}


const Body = () => {
  return (
    <>
      <div className="Body">
        <div className="search">
          Search
        </div>
        <div className="res-container">
          {
            restaurants.map(restaurant => <RestaurantCard key={restaurant.id} resDetails = {restaurant} />)
          }

          {/* <RestaurantCard resDetails = {restaurants[0]} />
          <RestaurantCard resDetails = {restaurants[1]} />
          <RestaurantCard resDetails = {restaurants[2]} />
          <RestaurantCard resDetails = {restaurants[2]} />
          <RestaurantCard resDetails = {restaurants[2]} />
          <RestaurantCard resDetails = {restaurants[2]} /> */}
          {/* <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/> */}
        </div>
      </div>
    </>
  )
}

const Footer = () => {
  return(
    <div className="footer">
      <div>
        <span>Delivery</span>
        <span>Dining Out</span>
        <span>Takeaway/Ordering Online</span>
      </div>
      © 2021 Foodie Finder, Inc. All rights reserved.
    </div>
  );
}


const AppLayout = () => {
  return (
      <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </>
  )
}



export default AppLayout;



// const root = ReactDOM.createElement(document.getElementById('root'));
// root.render(<Xyz/>);
