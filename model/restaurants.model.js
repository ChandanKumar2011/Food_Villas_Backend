const mongoose = require("mongoose");

//Created Schema
const restaurantSchema = mongoose.Schema({
    name: String,
    cuisines: Array,
    starRating: String,
    imageUrl: String,
        city: String,
        area: String,
        costForTwoString: String,
        //deliveryTiming:"40min",
        avgRating: Number,

});

//created model for schema
const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

module.exports = restaurantModel;