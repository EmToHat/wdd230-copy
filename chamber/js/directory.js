const requestURL = 'https://emt0rres.github.io/wdd230/chamber/data/directory.JSON';

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
    let companyWebsite = document.createElement('p');
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    companyName.innerHTML = `${company.name}`;
    companyAddress.innerHTML = 'Address: ' + `${company.address}`;
    companyPhone.innerHTML = 'Phone Number: ' + `${company.phone}`;
    companyWebsite.innerHTML ='Website: ' + `${company.website}`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      // element.setAttribute(name, value)

    companyLogo.setAttribute('src', company.imageurl);
    companyLogo.setAttribute('alt', 'Logo of ' + `${company.name}`);
    companyLogo.setAttribute('loading', 'lazy');
  


    // Add/append the section(card) with the h2 element
      // element.appendChild(node)
    
    card.appendChild(companyLogo);
    card.appendChild(companyName);
    card.appendChild(companyAddress);
    card.appendChild(companyPhone);
    card.appendChild(companyWebsite);
    
    
    // Add/append the existing HTML div with the cards class with the section(card)
      // node.appendChild(node)
    cards.appendChild(card);
}