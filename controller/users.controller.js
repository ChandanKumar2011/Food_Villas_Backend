const usersModel = require("../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {

    const { fullName, email, password} = req.body;
    const user = new usersModel({
        fullName, email, password : bcrypt.hashSync(password, 10)
    });

     //saving the data inside the database
    user
    .save()
    .then((data) => {
        res.send({message: "User registered Successfully"});

    })
    .catch((err) => {
        res
        .status(500)
        .send({message: err.message || "some error occured while registring user"});

    });

};

exports.login = (req, res) => {

    const {email, password} = req.body; // in request body we will have password send by users

    usersModel.findOne({email: email}).then((data) => {

        if(!data) {
            res.status(404).send({message: "email not found "});
        }

        //compare password 

        var isPasswordValid = bcrypt.compareSync(password, data.password);

        if(!isPasswordValid){
            res.status(401).send({message: "Invalid password"});
        }

        var token = jwt.sign({id: data._id}, "secretkey");

        res.send({
            user: {
                id: data._id,
                email: data.email,
                fullName: data.fullName,
            },
            accesstoken: token
        });
    })
    .catch((err) => {
        res.status(500).send({message: err.message});
    });

};
