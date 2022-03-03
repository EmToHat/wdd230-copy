let lastUpdate = document.lastModified;
document.getElementById("modified").innerHTML = lastUpdate;


const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// Hamburger Menu 
function toggleMenu()
{
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//const now = new Date()
//date = new Intl.DateTimeFormat().format(now)

function dayOfweek(){
    let message;

    let currentDate = new Date();
    weekdayValue = currentDate.getDay();

    if (weekdayValue == 3) 
    {
        message = "Come join us for the chamber meet & greet Wednesday at 7:00 p.m.";
        document.getElementById("greeting").innerHTML = message;
    }
    /*else if (weekdayValue == 3)
    {
        message = "Come join us for the chamber meet and greet Tonight at 7:00 p.m.";
        document.getElementById("greeting").innerHTML = message;
    }*/
    else 
    {
        document.getElementById("greeting").style.display = "none";
    }
}

//Output
dayOfweek();