/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  let x = document.getElementById("myNavLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function updates() {
  let lastUpdate = document.lastModified;
  document.getElementById("modified").innerHTML = lastUpdate;

  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("year").innerHTML = year;
}

updates()