const express = require('express')
const ejs = require("ejs")
const connectDb = require('./config/connectDb')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const blogRouter = require('./routes/blog')
const dotenv = require("dotenv").config()
const app = express()
const cors = require("cors")

app.set('views', __dirname + '/views');
app.set("view engine", "ejs")
app.use(cors({credentials: true, origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))



connectDb();

app.use("/user", userRouter)
app.use("/", postRouter)
app.use("/blog", blogRouter)


const port = process.env.PORT || 3000
app.listen(port, (req,res)=>{
    console.log("The server is running on port 3000 ")
})