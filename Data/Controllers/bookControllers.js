 const Book =require("../models/bookmodel")
  const AddBook=async(req,res)=>{
    try {
        const {title,category,newPrice,oldPrice,description,trending,coverImage}=req.body

        const newBook= await  Book({
            title,
            category,
            newPrice,
            oldPrice,
            description,
            trending,
            coverImage,
        })

        await newBook.save()
        res.status(200).json({
            success:true,
            newBook
        })
    } catch (error) {
        console.log("Error in posting a book",error);
        
    }
}

const getAllBooks= async(req,res)=>{
    try {
        const books = await Book.find()
        res.status(200).json({
            success:true,
            books
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
          });
        }
    }

const getOneBook=async(req,res)=>{
    try {
        const{id}=req.params
        
        const book=await Book.findById(id)
        if (!book) {
            return res.status(404).json({
              success: false,
              message: 'Book not found',
            });
          }
        res.status(200).json({
            success:true,
            book
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
          });
    }
}

const updateBook=async(req,res)=>{
    try {
        const {id}=req.params
        const updateBook=await Book.findByIdAndUpdate(id,req.body,{new:true})

        await updateBook.save()
        res.status(200).json({
            success:true,
            updateBook
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
          });
    }
}
const deleteBook=async(req,res)=>{
    try {
        const{id}=req.params
        const deleteBook= await Book.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            deleteBook
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
          });
    }
}
module.exports = {AddBook,getAllBooks,getOneBook,deleteBook,updateBook}