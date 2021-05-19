'use strict';

const case1 = 268;
const case2 = 670;
const case3 = 0;
const case4 = -999;

function solution(A) {
    let intSplitReverse = A.toString().split('').reverse();
    let currentElemet = null;
    let positionNumber = 0;
    let five = 5;
    let arrayResult = [];
    

    for (let externalIndex = 0; externalIndex < A.toString().length; externalIndex++) {
        for (let index = 0; index < intSplitReverse.length; index++) {
            currentElemet = Number(intSplitReverse[index]);
            positionNumber += currentElemet * Math.pow(10, index+1);
        }
        arrayResult.push(positionNumber + (five * Math.pow(10, externalIndex)));
    }

    const max = Math.max(...arrayResult);
    return max;
}

console.log(solution(case1));
// console.log(solution(case2));
// console.log(solution(case3));
// console.log(solution(case4));