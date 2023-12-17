// require('dotenv') .config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({path: './env'});

connectDB();


// import express from "express";
// const app = express() ;


// //   IIFE (Immediately Invoked Function Expression) 

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_DB }/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("Error" ,error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR", error);
//         throw error ;
//     }

// } ) ();