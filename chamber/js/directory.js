const requestURL = 'https://emt0rres.github.io/wdd230/chamber/data/directory.json';

const cards = document.querySelector('.businessCards');

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