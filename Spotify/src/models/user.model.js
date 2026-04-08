const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    "username":{
        type: String,
        unique: true,
        required: true
    } ,
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true
    },
    "role": {
        type: String,
        enum: ["user", "artist"],
        default: "user"
    }
})

const user = mongoose.model("user", userModel)

module.exports = user