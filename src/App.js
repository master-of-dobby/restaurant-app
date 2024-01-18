import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./header";

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
