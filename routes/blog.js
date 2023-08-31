const router = require("express").Router()

router.get("/about", async(req, res)=>{
    const aboutContent = "Welcome to my blog website! I'm Nyan Ye Htet..."
    res.render("about",{
        aboutContent : aboutContent
    })
})


router.get("/contact", async(req, res)=>{
    const contactContent = "Welcome to my blog website! I'm Nyan Ye Htet..."
    res.render("contact",{
        contactContent : contactContent
    })
})

module.exports = router