console.log("index is connected");

function loadcategories() {
   //fetch the data 
   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

   //convert promise to json
   .then(res => res.json())
   //send data to displaycategories function
   .then(data => displaycategories(data.categories));
}
 function loadvideos() {
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos));
 }
//{
   // "category_id": "1001",
   // "category": "Music"
//}

function displaycategories(categories) {
   //get the container
   const categoryContainer = document.getElementById("category-container");

  //loop operation on array of object
  for (let cat of categories) {
    console.log(cat);
      //create element for each object
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = ` <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
     //Append the element 
     categoryContainer.appendChild(categoryDiv);
   }
}
const displayVideos=(videos)=>{
 const videoContainer=document.getElementById("video-container");
    videos.forEach(video=>{
        console.log(video);
        const videoCard=document.createElement("div");
        videoCard.innerHTML=`
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}">
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `;
        videoContainer.append(videoCard);
    });
}

loadcategories();
loadvideos();