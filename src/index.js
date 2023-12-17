import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express() ;


;(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGO_DB }/${DB_NAME}`)
        app.on("error" , (error)=>{
            console.log("Error" ,error);
            throw error;
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`app running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR", error);
        throw error ;
    }

} ) ()