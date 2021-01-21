'use strict';

//////////////////////////////////////////////////////
// CONSTANS
//////////////////////////////////////////////////////
const myString = 'javascriptloops';

//////////////////////////////////////////////////////
// FUNCTIONS
//////////////////////////////////////////////////////
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    const vowelRegex = new RegExp(`[${vowels}]`,'gi');
    const consonantRegex = new RegExp(`(?![${vowels}])[a-z]`, 'gi'); 

    let arrayResult = [...s.match(vowelRegex), ...s.match(consonantRegex)];

    arrayResult.forEach(letter => console.log(letter));
}

vowelsAndConsonants(myString);