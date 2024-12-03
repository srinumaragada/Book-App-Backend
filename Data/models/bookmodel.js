const mongoose=require("mongoose")


const BookSchema= mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true,
    },
    coverImage:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    newPrice:{
        type:Number,
        required:true,
    },
    oldPrice:{
        type:Number,
        required:true
    },
    trending:{
        type:Boolean,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
},{
    timeStamps:true
})

const Book=mongoose.model("Book", BookSchema)
module.exports = Book