import { asyncHandler } from "../utiles/asyncHandler.js";
import { ApiError } from "../utiles/ApiError.js";
import { ApiResponse } from "../utiles/ApiResponse.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utiles/cloudinary.js"

const registerUser = asyncHandler(async (req, res)=>{
    res.status(200 ).json({
        message: "Ok" 
    })


    const {fullName,email,userName,password} = req.body ;
    console.log(email);

    if (
        [fullName, email, userName, password] .some((field) =>
        field?.trim() === "")
    ) 
    {
        throw new ApiError (400, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{userName},{email}]
    })

    if(existedUser){
        throw new ApiError(409, "email/userName already exist");
    }

    //const avatarLocalPath = req.files?.avatar[0]?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path;
    let avatarLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        avatarLocalPath = req.files.coverImage[0].path
    }


    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    // if(!avatarLocalPath){
    //     throw new ApiError(400, "avatar file is required")
    // }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // if(!avatar){
    //     throw new error(409, "avatar missing") ;
    // }
  
    const user = await User.create({
        fullName,
        avatar : avatar?.url || "",
        coverImage : coverImage?.url || "" ,
        email,
        password,
        userName : userName.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError( 500 , "error in registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered successfully",)
    )

    console.log("createdUsae" , user);
})

export {registerUser} ;