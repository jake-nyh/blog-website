const Post = require("../models/postModel");

const router = require("express").Router();

let homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing."

//home
router.get('/', async(req, res)=>{
    const posts = await Post.find()
     res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
        });
})

//compose
router.get('/compose', async(req,res)=>{
    res.render("compose")
})

//compose
router.post('/compose', async(req, res)=>{
    const {title, image, content} = req.body
    const post = await new Post({
            title,
            image,
            content
        }).save()
        
    res.redirect('/post')

})

//post
router.get("/:id", async(req,res)=>{
    const {id} = req.params
    const post = await Post.findById(id)
    res.render("post", {
        title: post.title,
        image: post.image,
        content: post.content,
        _id : post._id
      }); 
})

//edit
router.get('/edit/:id', async(req,res)=>{
    const {id} = req.params
    const post = await Post.findById(id)
    res.render("edit",{
        _id : post._id
    })
})

//update
router.post('/edit/:id', async(req, res)=>{
    const {id} = req.params;
    const {title, image, content} = req.body
    const updatedPost = await Post.findByIdAndUpdate(
        id,
        {
            title,
            image,
            content
        },
        {
            new : true
        })

    res.render("post", {
        title: updatedPost.title,
        image: updatedPost.image,
        content: updatedPost.content,
        _id: updatedPost._id    
    }); 
})

router.get('/delete/:id', async(req, res)=>{
    const {id} = req.params;
    const deletedPost= await Post.findByIdAndDelete(id)
    const posts = await Post.find()
    res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
        });
})


module.exports = router