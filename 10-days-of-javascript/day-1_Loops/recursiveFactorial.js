'use strict';

function recursiveFact(n) {
    if (n === 1) {
        return n;
    } else {
        return n * recursiveFact(n-1);
    }
}

console.log(recursiveFact(4));