// require('dotenv') .config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js";


dotenv.config({path: './.env'});

// DB connection
connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error:", error);
        throw error ;

    })

    // app connection
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongoDB connection failed", err) ;
})


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