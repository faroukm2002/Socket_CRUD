import express from 'express'
const app = express()
const port = 3000

import { Server } from 'socket.io'
import  postModel  from './database/models/post.model.js'
import {  connection } from './database/connection.js'
app.get('/', (req, res) => res.send('Hello World!'))
const server= app.listen(port, () => console.log(`Example app listening on port ${port}!`))
connection()
const io =new Server(server,{
    cors:"*",    
})


io.on("connection", (socket)=>{
    console.log(socket.id)

    //  get posts
    socket.on("requestPosts", async  data=>{
        const posts=await postModel.find()

        socket.emit("getPosts", posts)

    })

// create post
    socket.on("createPost",async(data)=>{
        const {title,description}=data 
        const post =await postModel.create({title,description})
        io.emit("newPost",post)
    })
 
})
  