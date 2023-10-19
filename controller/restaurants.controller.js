const RestaurantModel = require("../model/restaurants.model");


//Creating  our Restaurants
exports.create = (req, res) => {

    const { name, cuisines, starRating, imageUrl } = req.body;

    const newRestaurant = new RestaurantModel ({
        name,
        cuisines,
        starRating,
        imageUrl,
    });
    
    //Added Restaurant inside the Database
    newRestaurant
    .save()
    .then((data) => {
        if(!data) {
            res.status(400).send({ message: "Something went wrong" });
        }

        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({message: "Server is not available"});
    });

};


exports.fetch = (req, res) => {
    
    RestaurantModel.find()
    .then((data) => {
        if(!data) {
            res.status(400).send({ message: "Something went wrong" });
        }

        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: "Server is not available" });
    });
};


exports.fetchOne = (req, res) => {
    
    var _id = req.params.id;

    RestaurantModel.findById(_id)
    .then((data) => {
        if(!data) {
            res.status(400).send({ message: "Something went wrong" });
        }

        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: "Server is not available" });
    });
 };


 exports.updateOne = (req, res) => {

    const _id = req.params.id;

    //Note --> Restaurant is our Modal name. 
    RestaurantModel.findByIdAndUpdate(_id, { starRating: "3.5" })
    .then((data) => {

        if(!data) {
            res.status(400).send({ message: "Something went wrong" });
        }

        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: "Server is not available" });
    });
};

exports.delete = (req, res) => {
        
    //We are selecting the Id , wgich we want to delete.
    const id = req.params.id;

    RestaurantModel.findByIdAndDelete(id)
    .then((data) => {
        if(!data) {
            res.status(400).send({ message: "Something went wrong" });
        }
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: err });
    });

};


