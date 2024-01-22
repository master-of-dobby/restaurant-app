let accessToken;

fetch("https://restaurant-project-rwmk.onrender.com/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
  body: JSON.stringify({
    email: "rare123@gmail.com",
    password: "rarerabbit",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    accessToken = data.accessToken;
    //localStorage.set('token', accessToken);
  });

//const token = localStorage.setItem("token");

//console.log(token);

// f etch("http://localhost:8000/api/restaurants",{
//     headers:
//     {
//         Authorization:
//             "JWT eyJhb GciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE5OWJlZTJkMzdkNjBmMmM2MThhNiIsImlhdCI6MTcwNTY5MTMzMH0.aX4dWQVApKYEyMK-fMqMLL7VVzmAHWBiDP46XAPJmUE"
//         },
// })
// .then((res) => res.json())
// .then((restaurants) => console.log(restaurants));
