import mongoose, {schema}  from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";




const videoSchema = new Schema(
    {
        viodeoFile: {
            type: String,
            required: true,
          
        },
        thumbnail:{
            type: String,
            required: true,
           
        }, 
           title:{
            type: String,
            required: true,
           
        },
            discription:{
            type: String,
            required: true,
           
        },
            duration:{
            type: String,
            required: true,
           
        },
        views: {
            type: Number,
            default: 0
        }, 
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Type.ObjectId,
            
        }





    },
    {
        timestamp: true
    }
)



videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("video", videoSchema)