/* Help from W3Schools Website */

let currentPg = 0;
showPg(currentPg);

function showPg(n) {
  
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
 
  if (n == 0) {
    document.querySelector("#prevBtn").style.display = "none";
  } else {
    document.querySelector("#prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.querySelector("#nextBtn").innerHTML = "Submit";
  } else {
    document.querySelector("#nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n)
}

function nextPrev(n) {

  let x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;
  x[currentPg].style.display = "none";
  currentPg = currentPg + n;
  
  if (currentPg >= x.length) {
    document.querySelector("#reservation-form").submit();
    return false;
  }
  showPg(currentPg);
}

function validateForm() {
  let x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentPg].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentPg].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}