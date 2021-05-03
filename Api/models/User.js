const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },

    firstName:{
        type:String,
        require:true,
        min:3,
        max:20,
        
    },

    lastName:{
        type:String,
        require:true,
        min:3,
        max:30,
        
    },
    //gender: {
       // type: String, 
       // enum: ['MASCULIN', 'FEMININ', ]
    //},

    handi:{
        type:Boolean,
        require:true
       },
    
    //level:{
     //   type:String,
       // enum:['1', '2', '3', '4', 'MONITEUR']
      // },

    //role:{
       // type:String,
       // enum:['MEMBRE SIMPLE','MEMBRE DU BUREAU','PRESIDENT']
   // },

    address: {
        type:String,
        require:true
    },
        

    phoneNumber:{
        type:String,
        require:true,
    },


    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },

    password: {
        type: String,
        require: true,
        min:6
    },

    profilePicture:{
        type:String,
        default:""
    },

    coverPicture:{
        type:String,
        default:""
    },

    followers:{
        type:Array,
        default:[]
    },

    followings:{
        type:Array,
        default:[]
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    desc:{
        type: String,
        max:50
    },

    city:{
        type: String,
        max:50,
    },

    from:{
        type:String,
        max:50
    },

    relationship:{
       type:Number,
       enum:[1,2,3]
    }
  }, 
    {timestamps:true}
);

module.exports = mongoose.model("User", UserSchema)
