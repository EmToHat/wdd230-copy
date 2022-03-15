// _____Lazy Load Images____
function lazyLoad() {
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
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
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
}
/*__________________________________*/

// _____Updates____
function updates() {
  let lastUpdate = document.lastModified;
  document.getElementById("modified").innerHTML = lastUpdate;

  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("year").innerHTML = year;
}
/*__________________________________*/

// _____Hamburger Menu____
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}
/*__________________________________*/



// _____Greeting Banner____
//const now = new Date()
//date = new Intl.DateTimeFormat().format(now)

function dayOfweek() {
  let message;

  let currentDate = new Date();
  weekdayValue = currentDate.getDay();

  if (weekdayValue == 1) {
    message = "Join us for the chamber meet & greet Wednesday at 7:00 p.m.";
    document.getElementById("greeting").innerHTML = message;
  } else {
  /*else if (weekdayValue == 3)
    {
        message = "Come join us for the chamber meet and greet Tonight at 7:00 p.m.";
        document.getElementById("greeting").innerHTML = message;
    }*/
    document.getElementById("greeting").style.display = "none";
  }
}
/*__________________________________*/

//Output
lazyLoad();
updates();
dayOfweek();
