import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME  , 
  api_key: CLOUDIINART_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloud = async (localFilePath)=>{
    try {
        if(!localFilePath) return null ;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successsfully
        console.log("file uploaded" , response  )

        return response;

    } catch (error) {
        
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
        
    }


}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });