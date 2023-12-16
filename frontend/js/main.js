const baseUrl ='http://localhost:3000'
const clientIo=io(baseUrl )
  $(".createPost").click(()=>{
    const data={
        title:$(".title").val(),
        description:$(".desc").val(),

    }
    console.log(data)
    clientIo.emit("createPost",data)

  })




  clientIo.on("newPost",data=>{
    console.log(data)
  })