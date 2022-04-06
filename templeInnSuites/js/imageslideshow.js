let imagePosition = 1;
imageSlideshow(imagePosition);

function currentImage(n) {
  imageSlideshow(imagePosition += n);
}

function currentImage(n) {
  imageSlideshow(imagePosition = n);
}

function imageSlideshow(n) {
  let i;
  
  let images = document.getElementsByClassName("img-box");
  let dots = document.getElementsByClassName("dots");
  
  if (n > images.length) {imagePosition = 1}
  
  if (n < 1) {imagePosition = images.length}
  
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" enable", "");
  }
  images[imagePosition-1].style.display = "block";
  dots[imagePosition-1].className += " enable";
} 