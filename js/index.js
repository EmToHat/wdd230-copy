let lastUpdate = document.lastModified;
document.getElementById("modified").innerHTML = lastUpdate;


const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;