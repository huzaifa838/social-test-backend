import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("mongoDB connected successfully");
    
})
.catch((err) => {
    console.log("mongoDB connection faild !!!", err);
    
})

app.listen(process.env.port || 8000, () => {
    console.log((`server running on port ${process.env.PORT}`));
    
});
