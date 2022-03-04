const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
    
  // Create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let prophetName = document.createElement('h2');


    // Question: How do I simplify this?
    let birthDate = document.createElement('p');
    let deathDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let children = document.createElement('p');
    


    // Change the textContent property of the h2 element to contain the prophet's full name
    prophetName.innerHTML = `${prophet.name} ${prophet.lastname}`;

    birthDate.innerHTML = `Birth Date: ${prophet.birthdate}`;
    
    deathDate.innerHTML = `Death Date: ${prophet.death}`;

    birthPlace.innerHTML = `Birth Place: ${prophet.birthplace}`;

    children.innerHTML = `Amount of Children: ${prophet.numofchildren}`;

    
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
      // element.setAttribute(name, value)

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
  


    // Add/append the section(card) with the h2 element
      // element.appendChild(node)
    
    card.appendChild(portrait);
    card.appendChild(prophetName);
    card.appendChild(birthDate);
    card.appendChild(deathDate);
    card.appendChild(birthPlace);
    card.appendChild(children);
    
    // Add/append the existing HTML div with the cards class with the section(card)
      // node.appendChild(node)
    cards.appendChild(card);
}