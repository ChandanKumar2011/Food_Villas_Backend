const restaurantController = require("../controller/restaurants.controller");
const jwtAuth = require("../middleware/authJWT");

module.exports = (app) => {

//Create restaurant --POST CALL
app.post("/api/restaurants", restaurantController.create);

//fetch all restaurants from  our MongoDB
app.get("/api/restaurants",jwtAuth, restaurantController.fetch);

//fetch restaurant with particular Id
app.get("/api/restaurants/:id", restaurantController.fetchOne);

//Update restaurants by Id
app.put("/api/restaurants/:id", restaurantController.updateOne);

//Delete restaurant by Id
app.delete("/api/restaurants/:id", restaurantController.delete);

};