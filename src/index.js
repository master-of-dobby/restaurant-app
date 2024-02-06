import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import Instamart from "./Instamart";
import AppLayout from "./App";
import Cart from "./Cart";
//import {HashRouter as Router} from "react-router-dom";

//import Login from "./Login";
//import { Navigate } from "react-router-dom";
// import useFetch from "./useFetch";

//var loggedIn = false;

// function setIsLoggedIn(email, password) {
//   // console.log("value : ", value);
//   // loggedIn = value;

//   const [loggedIn, setIsLoggedIn] = loggedIn(email, password);

//   return loggedIn;
// }

//console.log(loggedIn);

// const Protected = ({ isLoggedIn, children }) => {
//   // Check if the user is logged in
//   //const isLoggedIn = /* logic to check if the user is logged in */;

//   // If logged in, render the children (protected content)
//   // Otherwise, redirect to the login page
//   //console.log("is loggedIn " , isLoggedIn);

//   return isLoggedIn ? children : <Navigate to="/" />;
// };

//const Instamart = lazy(() => import("./Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: <Instamart />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

//   {
//     path: "/app",
//     element: (
//       // <Protected>
//       //   {" "}
//       <AppLayout />
//       //   {" "}
//       // </Protected>
//     ),
//     errorElement: <Error />,
//     children: [

//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Router>
  //   <App />
  // </Router>
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
