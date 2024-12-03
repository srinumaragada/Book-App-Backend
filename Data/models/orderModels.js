const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true
    },
    address:{
        city:{
            type: String,
            required:true
        },
        country:{
            type: String,
            required:true,
        },
        state:{
            type: String,
            required:true,
        },
        zipcode:{
            type: String,
            required:true,
        }
    },
    ProductId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Book"
        }
    ],
    phone:{
        type:Number,
        required:true,
    },
    totalAmount:{
        type:Number,
        required:true,
    }
},
{
    timeStamps:true
})


const Orders=mongoose.model("Orders", orderSchema)

module.exports=Orders