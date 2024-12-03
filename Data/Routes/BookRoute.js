const express=require("express")
const { AddBook, getAllBooks, getOneBook, deleteBook, updateBook } = require("../Controllers/bookControllers")
const verifyToken = require("../middleware/verifyToken")

const router=express.Router()

router.post("/create-Book",verifyToken,AddBook)
router.get("/getBooks",getAllBooks)
router.get("/getOneBook/:id",getOneBook)
router.put("/update/:id",verifyToken,updateBook)
router.delete("/delete/:id",verifyToken,deleteBook)


module.exports = router


