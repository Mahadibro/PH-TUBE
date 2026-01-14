console.log("index is connected");
function removeActiveclass(){
  const activeButtons=document.getElementsByClassName("active");
  for(const btn of activeButtons){
    btn.classList.remove("active");
  }
}
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
    .then(data => {
      removeActiveclass();
      document.getElementById("btn-all").classList.add("active");
       displayVideos(data.videos);
    });
 }
 const loadcategoryvideos=(id)=>{
  
  const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
   console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => {
    removeActiveclass();
    const clickedButton=document.getElementById(`btn-${id}`);
    clickedButton.classList.add("active");
    console.log(clickedButton);
    displayVideos(data.category);
  });
  
 
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
    categoryDiv.innerHTML = ` 
    <button id="btn-${cat.category_id}" onclick="loadcategoryvideos('${cat.category_id}')" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`;
     //Append the element 
     categoryContainer.appendChild(categoryDiv);
   }
}
const displayVideos=(videos)=>{
 const videoContainer=document.getElementById("video-container");
  videoContainer.innerHTML="";
  if(videos.length===0){
    videoContainer.innerHTML=`<div class="col-span-full text-center flex flex-col justify-center items-center py-20 gap-5">
      <img class="w-[120px]" src="./assets/Icon.png">
      <h2 class="text-2xl font-bold"> oops! No content here </h2>
    </div>`;
    return;
  }
    videos.forEach(video=>{
        console.log(video);
        const videoCard=document.createElement("div");
        videoCard.innerHTML=`
        <div class="card bg-base-100">
  <figure class="relative">
    <img class="w-full h-[150px] object-cover"
      src="${video.thumbnail}">
      <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
  </figure>
  <div class="flex gap-3 px-0 py-5">
   <div class="profile">
    <div class="avatar avatar-online">
  <div class="w-6 rounded-full">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
   </div>
   <div class="intro">
    <h2 class="text-sm font-semibold">${video.title}</h2>
    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
    <p class="text-sm text-gray-400">${video.others.views} views</p>

   </div>
    
    
  </div>
</div>
        `;
        videoContainer.append(videoCard);
    });
}

loadcategories();
