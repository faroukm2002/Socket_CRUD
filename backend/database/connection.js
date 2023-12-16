
import mongoose from "mongoose"
export const connection=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/post').
    then(()=>{
        console.log("connect to MongoDB")
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB")
    })

}