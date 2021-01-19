'use strict';

// https://www.hackerrank.com/challenges/simple-array-sum/problem

const arrayToSum = [1, 2, 3, 4, 10, 11];

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    return ar.reduce((acum, current) => {
        return acum + current;
    }, 0);
}

const myResult = simpleArraySum(arrayToSum);

console.log(myResult);