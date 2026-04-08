const mongoose = require('mongoose')

async function connectDB (){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected");
        
    } catch (error) {
        console.error("Databse connection error");
    }
}

module.exports = connectDB