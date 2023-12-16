import mongoose, { Schema } from "mongoose";


const postSchema =new Schema({
    title:String,
    description:String,
},{timaStamps:true});

 const postModel =mongoose.model('post',postSchema);
 export default postModel 