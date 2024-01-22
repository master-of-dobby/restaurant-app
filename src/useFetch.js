// import { useEffect, useState } from "react";
// import { navigate, props } from "react-router-dom";

// function useFetch(email, password) {
//   const [loggedIn, setIsLoggedIn] = useState(false);
//   //console.log(e);
//   //e.preventDefault();

//   useEffect(() => {
//     fetch("https://restaurant-project-rwmk.onrender.com/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json; charset=UTF-8" },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (
//           data.message === "email not found!" ||
//           data.message === "Invalid Password"
//         ) {
//           loggedIn = false;
//         } else {
//           //navigate("/app/body");
//           loggedIn = true;
//           console.log("Loggin successfull!");
//           //props.isLoginMethod(true);
//           // return <Navigate replace to="/app" />;
//         }
//         //accessToken = data.accessToken;
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }, []);

//   return loggedIn;

//   // fetch("https://restaurant-project-rwmk.onrender.com/api/login", {
//   //     method: 'POST',
//   // });

//   //  console.log("Logged in User");

//   //  console.log("email : ", email);
//   //  console.log("password : ", password);
// }

// export default useFetch;
