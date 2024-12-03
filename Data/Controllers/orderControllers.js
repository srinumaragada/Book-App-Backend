const Orders = require("../models/orderModels")




  const createOrder= async(req,res)=>{
    try {
        const newOrder= await Orders(req.body)
        await newOrder.save()
        res.status(200).json({
            success: true,
            newOrder: newOrder
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


const getOrderByEmail=async(req,res)=>{
    try {
        const {email}=req.params
        const order=await Orders.find({email:email})
        
        if(!order){
            return res.status(400).json({
                success:false,
                message:"No Order Found"
            })
            
        }
        res.status(200).json({
            success:true,
            order
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

module.exports = {createOrder,getOrderByEmail}

