'use strict';

function iterativeFactoria(n) {
    let result = 1;
    for (let index = n; index > 0; index--) {
        result *= index; 
    }
    return result;
}

console.log(iterativeFactoria(4));