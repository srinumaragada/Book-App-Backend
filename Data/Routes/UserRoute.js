const express = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/admin", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const admin = await User.findOne({userName});
    console.log(userName);
    
    if (!admin) {
     return  res.status(404).json({
        message: "No Admin Found",
      });
    }

    if (admin.password !== password) {
     return  res.status(404).json({
        message: "Incorrect Password",
      });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.userName, role: admin.role },
      "shcvusfvhashcnvsvbs",
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
        success:true,
        token,
        user:{
            username: admin.userName,
            role: admin.role,
        }
    })
  } catch (error) {
   return  res.status(401).json({ message: "Failed to login as admin" });
  }
});

module.exports = router;