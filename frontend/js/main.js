const baseUrl = "http://localhost:3000";
const clientIo = io(baseUrl);

let allData = [];

clientIo.emit("requestPosts");
 

// get posts 
clientIo.on("getPosts", data => {
  allData = data;
  dispalyData(allData);
});


// create post 
$(".createPost").click(() => {
  const data = {
    title: $(".title").val(),
    description: $(".desc").val(),
  };
  console.log(data);
  clientIo.emit("createPost", data);
});



clientIo.on("newPost", data => {
  allData.push(data);
   dispalyData(allData)
});











function dispalyData(posts) {
  let cartona = ``;
  for (const post of posts) {
    cartona +=
     ` <div class="col-md-4 my-2">
      <div class="p-2 border border-success text-center">
      <h3>${post.title}</h3>
      <div class="my-2">${post.description}</div>
  </div>
  </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
