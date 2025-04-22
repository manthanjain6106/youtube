import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


 // Configuration

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });


    const uploadOnCloudinary = async (locaFilePath) =>{
        try {
            if (!locaFilePath) return null

            // Upload an image

            const response = await cloudinary.uploader.upload(locaFilePath, {
                resource_type: "auto"
            })

            // file hase been uploaded successfully

            console.log("file is uploaded on cloudinary", response.url);
            
            return response;


                
        } catch (error) {
            fs.unlinkSync(locaFilePath) //remove locally saved temporary file as the uoload operation got failed

            return null;
        }
    }

    export { uploadOnCloudinary };