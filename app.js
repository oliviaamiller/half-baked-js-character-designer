// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const id = headDropdown.value;
    // increment the head change count state
    headCount++;
    // update the dom for the head
    let img = document.createElement('img');
    img.src = `./assets/${id}-head.png`;
    headEl.append(img);
    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const id = middleDropdown.value;
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle
    let img = document.createElement('img');
    img.src = `./assets/${id}-middle.png`;
    middleEl.append(img);
    // update the stats to show the new count
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const id = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom
    let img = document.createElement('img');
    img.src = `./assets/${id}-pants.png`;
    bottomEl.append(img);
    // update the stats to show the new count
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const catchphraseValue = catchphrasesEl.value;
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(newCatchphrase);
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments

    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    for (let catchphrase of catchphraseArray) {
        const p = document.createElement('p');

        p.classList.add('catchphrase');

        p.textContent = catchphrase;

        catchphrasesEl.append(p);
    }

    
}
