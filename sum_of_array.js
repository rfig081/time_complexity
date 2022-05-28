//? You are given an array of numbers and you have to retrun sum of all the numbers

function arraySum(arr, sum = 0) {
    if (arr.length === 0) return sum;
    sum += arr[0];
    arr.shift();
    return arraySum(arr, sum);
}
//* Linear complexity O(n) 
console.log(arraySum([2, 3, 5, 10, 20]));

