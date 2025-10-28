import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


cloudinary.config({
    cloud_name: Process.env.CLOUDINARY_CLOUD_NAME,
    api_key: Process.env.CLOUDINARY_API_KEY,
    api_secret: Process.env.CLOUDINARY_API_SECRET
});

const uplodOnCloudinary = async (localFilepath) => {
    try {
        if (!localFilepath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploded successfully
        console.log("file is uploded in cloudinary", response.url);
        return response;
        
    }
    catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temprary files as the upload 
    }
} 