//? Calculate the factorial of a number

function fact(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result = result * i;
    }

    return result;
}
//* Logarithmic time complexity  O(log n)
//* Constant space complexity  O(1)

console.log(fact(5), fact(3));