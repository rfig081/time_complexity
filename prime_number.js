//? Determine whether a given number is prime

function isPrime(number) {
  if (isNaN(parseInt(number))) return false;
  if (number % 1 > 0) return false;
  if (number < 2) return false;

  // for (let i = 2; i < number; i++) {
  //   if (number % i === 0) return false;
  // }

  //* Improvement: Since there is a rule that all non prime numbers follow [n === sqrt(n) * sqrt(n)]
  //* We can improve the worst case scenario by iterating until we get to the sqrt of the given number instead of all smaller numbers.
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}
//* Best case: Constant time complexity O(1)
//* Average case: Linear time complexity O(n) | Improved = O(sqrt(n))
//* Worst case: Linear time complexity O(n) | Improved = O(sqrt(n))

console.log(
  isPrime(2),
  isPrime("abc"),
  isPrime(5.2),
  isPrime(-12),
  isPrime(200),
  isPrime(27277)
);
