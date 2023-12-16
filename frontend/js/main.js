const socket =io("http://localhost:3000")

  $(".createPost").click(()=>{
    const data={
        title:$(".title").val(),
        description:$(".desc").val(),

    }
    console.log(data)
  })