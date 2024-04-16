"use strict";

function findCountOfVowels(str) {
    let count = 0;
    const vowels = ['а', 'у', 'о', 'и', 'э', 'ы', 'е'];

    let strInLowerCase = str.toLowerCase();
    for(let char of strInLowerCase) {
        if(vowels.includes(char)) {
          
            count++;
        }
    }

    return count;
}
