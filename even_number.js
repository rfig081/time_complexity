//? Return true is the given number is even, false if not

function isEven(number) {
    return number % 2 === 0;
}
//* Constant time complexity  O(1)

console.log(isEven(2), isEven(9), isEven(6), isEven(7));
