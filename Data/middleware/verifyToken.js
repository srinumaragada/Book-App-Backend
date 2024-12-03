const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
   
  const token = req.headers["authorization"].split(" ")[1];

  
  jwt.verify(token, "shcvusfvhashcnvsvbs", (err, data) => {
    if (err) {
      return res.status(401).json({ message: "Access Denied: Invalid Token" });
    }

    
    req.data = data;
    next(); 
  });
};

module.exports = verifyToken;
