import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const mongoDB = async() =>{
    try{
        mongoose.connect(process.env.DB_url).then(()=> console.log("Connection successfully"));
    }catch (error){
        console.log("Error : " , error)
    }
} 

export default mongoDB;