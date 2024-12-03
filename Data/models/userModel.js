const mongoose=require("mongoose")
const bcrypt=require("bcrypt")


const UserSchema=mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    role:{
        type: String,
        enum:["user","admin"]
    }
},{
    timeStamps:true
})
UserSchema.pre("save",async (req,res,next)=>{
    if(!this.isModified(password)){
        return next()
    }

   this.password= await bcrypt.hash(this.password,12)
   next()
})

const User=mongoose.model("User",UserSchema)

module.exports = User;