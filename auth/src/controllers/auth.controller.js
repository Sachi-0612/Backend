const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")

async function registerUser(req, res){
    const {userName, password, email} = req.body;

    const isUserExists = await userModel.findOne({
        email
    })

    if(isUserExists){
        return res.status(409).json({
            message: "User Already Exists"
        })
    }

    const user = await userModel.create({
        userName, password, email
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET )

    res.cookie("token", token)

    res.status(201).json({
        message: "Registered successfully",
        user
    })
}

module.exports = {registerUser}