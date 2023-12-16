import express from 'express'
const app = express()
const port = 3000
import { Server } from 'socket.io'
// import { postModel } from './database/models/post.model.js'
app.get('/', (req, res) => res.send('Hello World!'))
const server= app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const io =new Server(server,{
    cors:"*",    
})


io.on("cconnection", (socket)=>{
    console.log(socket.id)


 
})