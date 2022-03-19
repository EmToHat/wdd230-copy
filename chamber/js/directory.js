const requestURL = 'https://emt0rres.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('.businessCards');
const listButton = document.querySelector("#lbtn");
const cardButton = document.querySelector("#cdbtn");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

function displayCompanies(company) {
    
  // Create elements to add to the document
    let card = document.createElement('section');
    let companyLogo = document.createElement('img');
    let companyName = document.createElement('h2');
    let companyAddress = document.createElement('p');
    let companyPhone = document.createElement('p');
    let companyWebsite = document.createElement('a');
    
    companyName.innerHTML = `${company.name}`;
    companyAddress.innerHTML = `${company.address}`;
    companyPhone.innerHTML = `${company.phone}`;
    companyWebsite.innerHTML = `${company.website}`;

    companyLogo.setAttribute('src', company.imageurl);
    companyLogo.setAttribute('alt', 'Logo of ' + `${company.name}`);
    companyLogo.setAttribute('loading', 'lazy');
    companyWebsite.setAttribute('href', `${company.website}`)
    
    card.appendChild(companyLogo);
    card.appendChild(companyName);
    card.appendChild(companyAddress);
    card.appendChild(companyPhone);
    card.appendChild(companyWebsite);
    
    cards.appendChild(card);
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}