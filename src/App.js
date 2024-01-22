import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
//import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./Login";
//import Body from "./Body";

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

// Lazy Loading
// Dynamic Import
// Chunking
// Code Splitting
// On Demand Loading

//const queryClient = new QueryClient();

const AppLayout = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  function setIsLoggedIn(value) {
    setLoggedIn(value);
  }

  return !loggedIn ? (
    <Login isLoginMethod={setIsLoggedIn}></Login>
  ) : (
    <>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
