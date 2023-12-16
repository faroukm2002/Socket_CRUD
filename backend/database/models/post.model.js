import mongoose from "mongoose";


const postSchema =new Sechma({
    title:String,
    description:String,
},{timaStamps:true});

export const postModel =mongoose.model('pos',postSchema);