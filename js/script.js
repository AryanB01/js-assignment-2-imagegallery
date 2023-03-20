//declaring variables
let fullImage = document.querySelector("#fullImage");
let thumbImages = document.querySelectorAll("#thumbImages img");
let figcaption = document.querySelector("#caption");
let close = document.querySelector("span");
// let overlay = document.querySelector(".overlay");
// let btn = document.querySelector("button");

//creating a loop to loop throuh the image and replace the small images with the large images when there is click in the thumb images.
for (let i = 0; i < thumbImages.length; i++) {
  //creting an event listener when the user click in the thumb images
  thumbImages[i].addEventListener("click", function display() {
    //getting the id of the image that is clicked and replacinig the small images with the large using the image suffix.
    let newSrc = this.src.replace("-small", "-large");

    //getting the alt of the image with the new src to use for updating alt in each iteration
    let newAlt = this.alt;

    // using the if else condition to check wheaher the image is being displayed or not
    if (fullImage.style.display === "inline-block") {
      //displaying the large image using the src
      fullImage.src = newSrc;

      //updating the alt of the image with the new alt
      fullImage.alt = newAlt;

      //displayig the alt of the new image as a caption
      figcaption.textContent = newAlt;

      //if the image is not displayed in the screen then it goes to else
    } else {
      //displaying the large image using the src
      fullImage.src = newSrc;

      //updating the alt of the image with the new alt
      fullImage.alt = newAlt;

      //displaying the alt of the new image as a caption
      figcaption.textContent = newAlt;

      //displays the image if it is not diplayed ( when closed using the "X" it helps for the code to display the thumb image as full image)
      fullImage.style.display = "inline-block";
    }
  });
}
//closes the image using the 'X' arrow at the top right of the images
close.addEventListener("click", function () {
  fullImage.style.display = "none";
});

// tired to add ligh and dark to main image but went wrong

// // for the button to add darkness and lighten
// btn.addEventListener("click", function luminious() {
//   //getting attribute class
//   const btnClass = btn.getAttribute("class");
//   // using if else to make it dark or light
//   if (btnClass === "dark") {
//     //if it is light then it will darken the image
//     btn.setAttribute("class", "light");
//     btn.textContent = "Lighten";
//     overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
//   } else {
//     // if it is dark then it will lighten the image
//     btn.setAttribute("class", "dark");
//     btn.textContent = "Darken";
//     overlay.style.backgroundColor = "rgba(0,0,0,0)";
//   }
// });
