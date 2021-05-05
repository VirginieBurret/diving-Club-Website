const router = require ("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
module.exports = router;


router.get("/", (req, res) => {
    res.json('user route')
})

// UPDATE USER

router.put("/:id", async(req,res) => {
    if(req.body.userId===req.params.id || req.body.isAdmin) {
      if(req.body.password){
          try{
          const salt = await bcrypt.genSalt(10)
          req.body.password = await bcrypt.hash(req.body.password,salt);
    }catch(err){
        return res.status(500).json(err.message)
    }
 }
 try{
     const user = await User.findByIdAndUpdate(req.params.id, {
         $set: req.body, // set all inputs inside this body
     });
     res.status(200).json('Account has been updated!');
    } catch (err){
        return res.status(500).json(err.message);
    }
 
    }else{
        return res.status(403).json("You can only update your account!")
    }
});


// DELETE USER 
router.delete("/:id", async(req,res) => {
    if(req.body.userId===req.params.id || req.body.isAdmin) {
     
 try{
     const user = await User.findByIdAndDelete(req.params.id); // OU deleteOne({_id:req.params.id});
       
     res.status(200).json('Account has been deleted!');
    } catch (err){
        return res.status(500).json(err.message);
    }
 
    }else{
        return res.status(403).json("You can only delete your account!")
    }
});


// GET A USER 

router.get("/:id", async (req,res) => {
    try {
       
        const user = await User.findById(req.params.id);
        const { password, ...other} = user._doc // carries all the object user with all the informations. We just send other and not password and updated at
        res.status(200).json(other)
        
    } catch (error) {
        
        res.status(500).json(error.message)
    }
});


TODO: // GET ALL USERS  TODO: 
router.get("/userlist",async(req,res) => {
    try {
        const results = await User.find();
        console.log(results);
      } catch (err) {
        throw err;
      }
});

// FOLLOW USER

router.put("/:id/follow",async(req,res) => {
    if(req.body.userId !== req.params.id){ // on check si les user sont les memes ( si celui que le user veut follow est lui meme)
try {
   const user = await User.findById(req.params.id); // on cherche cet user avec l'id
   const currentUser = await User.findById(req.body.userId) //on cherche le current user qui essaye de faire la request
   if(!user.followers.includes(req.body.userId)) { // si les followers du user n'incluent pas req.body.userId alors
    console.log("REQ BODY",req.body)
     await user.updateOne({$push:{followers:req.body.userId}}) //on update followers et followings array
     await currentUser.updateOne({$push:{followings:req.params.id}})//on update followers et followings array
     res.status(200).json("user has been followed")
   }else{
       res.status(403).json('you already follow this user') 
   }

    
} catch (error) {
    res.status(500).json(error.message)

   }
    
    }else{ //si c le meme user
      res.status(403).json("You can't follow yourself") // if users are the same 
    }  
})


// UNFOLLOW USER

router.put("/:id/unfollow",async(req,res) => {
    if(req.body.userId !== req.params.id){ // on check si les user sont les memes ( si celui que le user veut follow est lui meme)
try {
   const user = await User.findById(req.params.id); // on cherche cet user avec l'id
   const currentUser = await User.findById(req.body.userId) //on cherche le current user qui essaye de faire la request
   if(user.followers.includes(req.body.userId)) { // si les followers du user incluent req.body.userId alors
   
     await user.updateOne({$pull:{followers:req.body.userId}}) //on update followers et followings array
     await currentUser.updateOne({$pull:{followings:req.params.id}})//on update followers et followings array
     res.status(200).json("user has been unfollowed")
   }else{
       res.status(403).json("you don't follow this user") 
   }

    
} catch (error) {
    res.status(500).json(error.message)

   }
    
    }else{ //si c le meme user
      res.status(403).json("You can't unfollow yourself") // if users are the same 
    }  
})


