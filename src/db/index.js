import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



// import express  from "express";
// const app= express() ;

const connectDB = async() =>{
    try {
          await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`)
        // app.on("error",(error)=>{
        //     console.log(`error in connecting the app : ${error}`);
        //     throw error ;
        // });
        // app.listen(process.env.PORT,()=>{
        //     console.log(`app listening on port ${process.env.PORT}`);
        // })

        console.log("db connected");
    } catch (error) {
        console.error("Error:", error);
        throw error ;
    }
}

export default connectDB ;


