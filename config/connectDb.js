const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const connectDb = async(req, res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db is connected successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDb