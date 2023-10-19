const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const path = require("path");

const dbConfigs = require("./config/db.config")

const app = express();


//created server using express
app.listen('8000', ()=>{
    console.log("server is running on port 8000")
});

app.use(bodyParser.json());

mongoose.connect(dbConfigs.url);

    const db = mongoose.connection;

    db.on("error", () => {
        console.log("Error in connection to db");
    });

    db.on("open", () => {
        console.log("Connection is successful");
    });

// const users = [
  //  {
    //    id : 1,
      //  name : "Chandan",
    //    age : 24,
    //},
    //{
      //  id : 2,
        //name : "Chandan kumar",
        //age : 25,
    //},
    //{
      //  id : 3,
       // name : "Chandan kumar singh",
       // age : 26,
    // },
   // {
     //   id : 4,
       // name : "Chandan Tejas",
        // age : 27,
    //}
          
//];

//app.get("/", (req, res) => {
  //  console.log("request", req);
   // res.send("Hello");
//});
// GET request to return all the users
// app.get("/api/users", (req, res) => {
   // res.send(users);
// });

//app.get("/api/users/:id", (req, res) => {
  //  const id = req.params.id;
     
    // const user = users.find((user) => user.id == id);

   // if(!user){
     //   res.status(404).json({ message : "User does not exist" });
    // }

   // res.json(user);

// });


//CREATE user 
// app.post("/api/user", (req, res) => {

  //  const name = req.body.name;
   // const age = req.body.age;

    //const user = {
      //  id: Math.random() * 10000,
        //name: name,
       // age: age,
    // };

    // users.push(user);
  //  res.json(users);
  // });


//Update user by id.

//app.put("/api/user/:id", (req, res) =>{

  //  const id = req.params.id;
    //const user = users.find((user) => user.id == id);

    // if(!user){
       // res.status(404).json({ message: "User does not exist"});
   // }

    // const keys = Object.keys(req.body);

    // keys.forEach((key) => {
      //  if(!user[key]) {
        //    res.status(404).send({message: "Invalid Detail passed"})
        //  }
       //  user[key] = req.body[key];
    //})

    // res.json(user);
// });

//DELETE USER by id
 //app.delete("/api/user/:id", (req, res) => {

   // const id = req.params.id;
    // const user = users.find((user) => user.id == id);

    //  if(!user) {
      //  res.status(404).send("User does not exist");
    //}
     // In filteredUser we are having only that user ,
     //that are left . After deleting any user . 
   // const filteredUsers = users.filter((user) => user.id != id);
    //res.json(filteredUsers);

// });




//CREATE restaurant ----- POST call


//fetch all restaurants from  our MongoDB


//fetch restaurant with particular Id


    //update restaurant by Id
   

    //Delete restaurant by Id
    
    require(path.join(__dirname, "./Routes/restaurants.routes"))(app);
    require(path.join(__dirname, "./Routes/users.routes"))(app);

    console.log("directory name", __dirname);

