const express = require('express')
const ejs = require("ejs")
const connectDb = require('./config/connectDb')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const dotenv = require("dotenv").config()
const app = express()

app.set('views', __dirname + '/views');
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

connectDb();

app.use("/user", userRouter)
app.use("/post", postRouter)

app.get("/about", async(req, res)=>{
    const aboutContent = "Welcome to my blog website! I'm Nyan Ye Htet..."
    res.render("about",{
        aboutContent : aboutContent
    })
})

app.get("/contact", async(req, res)=>{
    const contactContent = "Welcome to my blog website! I'm Nyan Ye Htet..."
    res.render("contact",{
        contactContent : contactContent
    })
})

// router.get("/about", async(req, res)=>{
//     const aboutContent = "Welcome to my blog website! I'm Nyan Ye Htet..."
//     res.render("about",{
//         aboutContent : aboutContent
//     })
// })

const port = process.env.PORT || 3000
app.listen(port, (req,res)=>{
    console.log("The server is running on port 3000 ")
})