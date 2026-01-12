console.log("index is connected");

function loadcategories() {
   //fetch the data 
   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

   //convert promise to json
   .then(res => res.json())
   //send data to displaycategories function
   .then(data => displaycategories(data.categories));
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

loadcategories();