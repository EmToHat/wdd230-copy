const requestURL = 'https://emt0rres.github.io/wdd230/templeInnSuites/data/directory.json';

const cards = document.querySelector('div.templeCards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

function displayTemples(temple) {
    
  // Create elements to add to the document
    let card = document.createElement('section');
    let templeImg = document.createElement('img');
    let templeName = document.createElement('h3');
    let countryName = document.createElement('h4');
    let templeAddress = document.createElement('p');
    let templePhone = document.createElement('p');
    let templeWebsite = document.createElement('a');
    let templeClosures = document.createElement('p');
    
    templeName.innerHTML = `${temple.name}`;
    countryName.innerHTML = `Country: ${temple.country}`;
    templeAddress.innerHTML = `Address: ${temple.address}`;
    templePhone.innerHTML = `Phone Number: ${temple.phone}`;
    templeWebsite.innerHTML = `Website: ${temple.website}`;
    templeClosures.innerHTML = `Closures: ${temple.closures}`;

    templeImg.setAttribute('src', temple.imageurl);
    templeImg.setAttribute('alt', 'Image of ' + `${temple.name}`);
    templeImg.setAttribute('loading', 'lazy');
    templeWebsite.setAttribute('href', `${temple.website}`)
    
    card.appendChild(templeImg);
    card.appendChild(templeName);
    card.appendChild(countryName);
    card.appendChild(templeAddress);
    card.appendChild(templePhone);
    card.appendChild(templeWebsite);
    card.appendChild(templeClosures);
    
    cards.appendChild(card);
}

const gridView = document.querySelector('.gridViewbtn');
const listView = document.querySelector('.listViewbtn');

gridView.addEventListener('click', () => {cards.classList.add('templeCards')}, once="true");
gridView.addEventListener('click', () => {cards.classList.remove('switchListView')}, once="true");

listView.addEventListener('click', () => {cards.classList.add('switchListView')}, once="true");
listView.addEventListener('click', () => {cards.classList.remove('templeCards')}, once="true");