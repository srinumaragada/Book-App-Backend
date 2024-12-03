const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const Bookrouter = require("./Data/Routes/BookRoute")
const OrderRouter = require("./Data/Routes/orderRoutes")
const AuthRouter = require("./Data/Routes/UserRoute")
const adminRouter = require("./Data/stats/adminRoute")
app.use(express.json())

mongoose.connect("mongodb+srv://sreenu:srinumaragada%40123@cluster0.znzs0.mongodb.net/BookStore?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected Successfully");
    
}).catch(err=>{
    console.log(err);
})


app.use(cors({
    origin: ["http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}));


app.use("/api/books",Bookrouter)
app.use("/api/orders",OrderRouter)
app.use("/api/auth",AuthRouter)
app.use("/api/admin",adminRouter)


app.listen(3000,()=>{
    console.log("server is running");
    
})