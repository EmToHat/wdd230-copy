// variable to get all imgs w/data-src  attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");


// arrow function which processes the data-src attributes
// function expression
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
  };
};


imagesToLoad.forEach((img) => {
    loadImages(img);
});

// if this works on the browser
if("IntersectionObserver" in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
});
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
// Loads images
} else {
    imagesToLoad.forEach((img) => {
    loadImages(img);
});
}
  

// Date modified in footer
function lastUpdated() {
	let lastUpdate = document.lastModified;

	document.getElementById("modified").innerHTML = lastUpdate;

	const date = new Date();

	const year = date.getFullYear();

	document.getElementById("year").innerHTML = year;
}


// Output
lastUpdated();