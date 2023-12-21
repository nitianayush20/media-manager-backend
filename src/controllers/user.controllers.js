import { asyncHandeler } from "../../utiles/asyncHandeler.js";


const registerUser = asyncHandeler(async (req, res)=>{
    res.status(200 ).json({
        message: "Ok" 
    })
})


export {registerUser} ;