const router = require ("express").Router();
const Post = require("../models/Post");
const User = require('../models/User');


// CREATE POST

router.post("/", async (req,res) => {
    
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE POST
router.put("/:id", async (req,res) => {

    try {
        const post = await Post.findById(req.params.id);
         // now we look for the user of this post 
    if(post.userId===req.body.userId) {// if its the same, can update
    await post.updateOne({$set:req.body})
    res.status(200).json("the post has been updated")
    } else {
        res.status(403).json("you can only update your post")
    }
     } catch (error) {
        res.status(500).json(error.message)
    }
})


// DELETE POST

router.delete("/:id", async (req,res) => {

    try {
        const post = await Post.findById(req.params.id);
         // now we look for the user of this post 
    if(post.userId===req.body.userId) {// if its the same, can delete
    await post.deleteOne();
    res.status(200).json("the post has been deleted")
    } else {
        res.status(403).json("you can only delete your post")
    }
     } catch (error) {
        res.status(500).json(error.message)
    }
})


// LIKE/DISLIKE POST
router.put("/:id/like", async (req,res) => {

    try {
        const post = await Post.findById(req.params.id);
         
    if(!post.likes.includes(req.body.userId)) { // si likes array n'include pas the user id  
    await post.updateOne({$push:{likes:req.body.userId}})
    res.status(200).json("The post has been liked")
    } else {
        await post.updateOne({$pull:{likes:req.body.userId}})
        res.status(200).json("The post has been disliked")
    }
     } catch (error) {
        res.status(500).json(error.message)
    }
});

// GET POST
router.get("/:id", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json(error.message)
    }
});

// GET TIMELINE POSTS ( ALL POSTS OF THE USER FOLLOWING) 

router.get("/timeline/all", async (req,res) => {
    console.log(req.body)
    try {
        const currentUser = await User.findById(req.body.userId); // we look for the current userId
         const userPosts = await Post.find({userId:currentUser._id}); // we find all posts of the user; in post model we have userId
         const friendPosts = await Promise.all(
             currentUser.followings.map((friendId) => {
                return Post.find({userId: friendId});
             })
         );
         res.json(userPosts.concat(...friendPosts)) // take all posts of friends and concat with this posts 
        
    } catch (error) {
        res.status(500).json(error.message)
    }
});

module.exports = router;