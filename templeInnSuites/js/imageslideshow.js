let imagePosition = 1;
imageSlideshow(imagePosition);

function currentImage(x) {
  imageSlideshow(imagePosition = x);
}

function imageSlideshow(n) {
  let i;
  
  let images = document.getElementsByClassName("img-box");
  let dots = document.getElementsByClassName("dots");
  
  if (x > images.length) {imagePosition = 1}
  
  if (x < 1) {imagePosition = images.length}
  
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" enable", "");
  }
  images[imagePosition-1].style.display = "block";
  dots[imagePosition-1].className += " enable";
} 