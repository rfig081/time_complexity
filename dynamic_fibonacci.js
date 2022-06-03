//? Return the nth element of a fibonacci sequence

function fib(n, memo = {}) {
    let result;

    if (memo[n]) {
        return memo[n];
    }
    if (n === 0 || n === 1) {
        return 1;
    } else {
        result = fib(n - 1, memo) + fib(n - 2, memo);
    }

    memo[n] = result;
    return result;
}
//* Linear time complexity  O(n)

console.log(fib(4), fib(0), fib(6));
