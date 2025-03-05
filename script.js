// Pasiekiame elementus naudojant DOM manipuliacijos metodus
let h1Element = document.getElementById('antraste');
let divElement = document.getElementsByClassName('turinys')[0]; // Pirmas div su klase 'turinys'
let pElement = document.querySelector('.tekstas'); // Pasirenkame pirmą paragrafą su klase 'tekstas'
let h3Element = document.querySelector('.antraste3'); // Pasirenkame h3 elementą su klase 'antraste3'

// Pakeičiam tekstą ir stilių
h1Element.innerText = 'Pakeista h1 antraštė!';
h1Element.style.color = 'blue'; // Pakeičiam h1 antraštės tekstą į mėlyną

divElement.innerHTML = 'Pakeistas div elementas su nauju tekstu.';
divElement.style.backgroundColor = 'gray' // Pakeičiam div elemento fono spalvą į pilkq

pElement.innerHTML = 'Pakeistas paragrafas su nauju tekstu.';
pElement.style.fontStyle = 'italic'; // Pakeičiam paragrafo teksto stilių į kursyvą

h3Element.innerText = 'Pakeista h3 antraštė!';
h3Element.style.textDecoration = 'underline'; // Pakeičiame h3 elemento stilių į pabrauktą

