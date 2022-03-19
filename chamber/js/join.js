// Forms
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

// Buttons
let nxt1 = document.getElementById("nxt1");
let nxt2 = document.getElementById("nxt2");
let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");



// Add Onclick events
nxt1.onclick = function(){
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
}
back1.onclick = function(){
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
}

nxt2.onclick = function(){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "block";
}

back2.onclick = function(){
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
}