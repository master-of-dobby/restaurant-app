import React from "react";
import Footer from "./Footer";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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

const queryClient = new QueryClient();

const AppLayout = () => {
  return (
    <>
      <Header></Header>

      <QueryClientProvider client={queryClient}>
        {/* <Body></Body> this should be dynamic*/}
        <Outlet></Outlet>
      </QueryClientProvider>

      <Footer></Footer>
    </>
  );
};

export default AppLayout;
