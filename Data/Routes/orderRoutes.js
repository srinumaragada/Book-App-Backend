const express = require("express");
const { createOrder, getOrderByEmail } = require("../Controllers/orderControllers");


const router=express.Router();

router.post("/order",createOrder)
router.get("/order/:email",getOrderByEmail)


module.exports = router;