//? Return the nth element of a fibonacci sequence

function fib1(nth) {
  const numbers = [1, 1];

  if (nth === 0 || nth === 1) return 1;

  while (nth > 1) {
    numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]); //*n-1
    nth--; //*n-1
  }

  return numbers[numbers.length - 1];
}

function fib2(nth) {
  const numbers = [1, 1];

  for (let i = 2; i < nth + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]); //*n-1
  }

  return numbers[nth];
}
//* Linear time complexity O(n)

console.log(fib(4), fib(0), fib(1));
