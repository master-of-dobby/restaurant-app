const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const path = require("path");

const dbConfigs = require("./config/db.config");

const app = express();

app.listen("8000", () => {
  console.log("server is running on port 8000");
});

mongoose.connect(dbConfigs.url);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting DB");
});

db.on("open", () => {
  console.log("Connection Successful");
});

app.use(bodyParser.json());

app.use(cors());

//require("./routes/users.routes")
require(path.join(__dirname, "./routes/restaurants.routes"))(app);

require(path.join(__dirname, "./routes/users.routes"))(app);

// const users = [
//     {
//         id: 1,
//         name: "rat",
//         age:"21",
//     },
//     {
//         id: 2,
//         name: "rabbit",
//         age:"19",
//     },
//     {
//         id: 3,
//         name: "navyaash",
//         age:"20",
//     },
//     {
//         id: 4,
//         name: "aashynav",
//         age:"22",
//     },
// ];

// app.get("/", (req, res) => {
//     console.log("request", req.body);
//     res.send("Hello");
// });

// // GET request to return all users
// app.get("/api/users", (req, res) => {
//     res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {

//     const id = req.params.id;

//     const user = users.find((user) => user.id == id);

//     if(!user){
//         res.status(404).json({message: "User does not exist"});
//     }

//     res.json(user);
// });

// //create a new user
// app.post("/api/user", (req, res) => {

//     const name = req.body.name;
//     const age = req.body.age;

//     const user = {
//         id : Math.random() * 10000,
//         name: name,
//         age: age,
//     };

//     users.push(user);

//     res.json(users);

// });

// //update user by id
// app.put("/api/user/:id", (req, res) => {

//     const id = req.params.id;
//     const user = users.find(user => user.id == id);

//     if(!user){
//         res.status(404).json({message : "user does not exist!"});
//     }

//     const keys = Object.keys(req.body);

//     keys.forEach(key => {
//         if(!user[key]){
//             res.status(404).send({message : "Invalid details passed!"});
//         }

//         user[key] = req.body[key];
//     });

//     res.json(user);

// });

// //delete user

// app.delete("/api/user/:id", (req, res) => {

//     const id = req.params.id;

//     const user = users.find(user => user.id == id);

//     if(!user){
//         res.status(404).send("user does not exist!");
//     }

//     const filteredUsers = users.filter(user => user.id != id);

//     res.json(filteredUsers);

// });

// CRUD operations
// HTTP methods

// GET: retrieve data from a server
// POST: send data to a server (create)
// PUT/PATCH: update data on the server (update)
// DELETE: delete data from the server (delete)

// create -> POST
// read   -> GET
// update -> PUT or PATCH
// delete -> DELETE

// Database ---> helps us stores all the data
// NodeJS(business logic) ---Mangoose--- MongoDb

//Restaurant Table

// id, name, cuisines, starRating, image

// const { Schema, model } = mongoose;

// const restaurantSchema = Schema({
//     name : String,
//     cuisines: Array,
//     starRating: String,
//     imageUrl: String,
// });

//const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Create restaurant -- POST call

// app.post("/api/restaurants", (req, res) => {

//     const {name, cuisines, starRating, imageUrl} = req.body;

//     const newRestaurant = new Restaurant({
//         name,
//         cuisines,
//         starRating,
//         imageUrl,
//     });

//     newRestaurant.save().then(data => {
//         if(!data){
//             res.status(400).send({message: "Something went wrong"});
//         }

//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({message : "Server not available"});
//     });

// });

// fetch the list of restaurants

// app.get("/api/restaurants", (req, res) => {

//     Restaurant.find().then(data => {
//         if(!data){
//             res.status(400).send({message : "Something went Wrong!"});
//         }

//         res.send(data);
//     }).catch((err) => {
//         res.status(500).send({message : "Server not available"});
//     });
// });

// // fetch restaurant with particular id

// app.get("/api/restaurants/:id", (req, res) => {

//     var _id = req.params.id;

//     Restaurant.findById(_id).then(data => {

//         if(!data){
//             res.status(400).send({message : "Something went Wrong!"});
//         }

//         res.send(data);

//         }).catch((err) => {
//             res.status(500).send({message : "Server not available"});
//         });
// });

// update restaurant by id

// app.put("/api/restaurants/:id", (req, res) => {

//     const _id = req.params.id;

//     Restaurant.findByIdAndUpdate( _id, {starRating : "4.4"})
//         .then((data) => {

//             if(!data){
//                 res.status(400).send({message : "Something went Wrong!"});
//             }

//             res.send(data);

//             }).catch((err) => {
//                 res.status(500).send({message : "Server not available"});
//             });
// });

// // delete a restaurant by id

// app.delete("/api/restaurants/:id", (req, res) => {

//     var _id = req.params.id;

//     Restaurant.findByIdAndDelete(_id).then(data => {

//         if(!data){
//             res.status(400).send({message : "Something went Wrong!"});
//         }

//         res.send(data);

//         }).catch((err) => {
//             res.status(500).send({message : "Server not available"});
//         });
// });

// design pattern
