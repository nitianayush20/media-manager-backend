import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors" ;


const app= express() ;

app.use(cors({
    origin : process.env.CORS_URL
}))

// to get every data in json
app.use(express.json({limit: "16kb" })) ;

//to get data in uniform format from web
app.use(express.urlencoded({extended:true,limit:"16kb"})) ;

app.use(express.static("pblic")) ;

app.use(cookieParser()) ;




export default app ;


