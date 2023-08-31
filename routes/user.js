const User = require("../models/userModel");
const router = require("express").Router()

router.get("/register", async(req,res)=>{
    res.render("register")
})

router.post("/register", async(req, res)=>{
    const {username, email, password} = req.body;
    try{
        const existUser = await User.findOne({email})
        if(existUser){
            throw new Error("User is already exists")
        }
        const user = await User.create({
            username,
            email,
            password
        })
        res.redirect("/user/login")
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/login", async(req,res)=>{
    res.render("login")
})

router.post("/login", async(req,res)=>{
    const {email, password} = req.body
    try{
        const user = await User.findOne({email})
        if(email && user.password === password){
          res.redirect("/")
        }else{
            throw new Error("Wrong cretentials")
        }
    }catch(err){
        res.status(500).json(err) 
    }
})

router.get("/logout", async(req, res)=>{
    res.redirect("/user/login")
})

module.exports = router