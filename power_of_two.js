//? Determine whether the input number is a power of 2

function isPowerOfTwo(number) {
    if (number < 1) return false;

    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) return false;
        dividedNumber = dividedNumber / 2;
    }

    return true;
}
//* Logarithmic time complexity  O(log n)

//* Bitwise maggic improvement:
function isPowerOfTwo(number) {
    if (number < 1) return false;

    return number & (number - 1);

}
//* Constant time complexity  O(1)

console.log(isPowerOfTwo(2), isPowerOfTwo(9), isPowerOfTwo(6), isPowerOfTwo(8));