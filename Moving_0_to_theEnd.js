/*
Write an algorithm that takes an array and moves
all of the zeros to the end, preserving the order
of the other elements.

Example:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

let moveZeros = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] === 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));