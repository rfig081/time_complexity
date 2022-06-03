//? You are given an array of numbers and you have to return the min value

function getMin(numbers) {
    let minNumber = numbers[0];
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;

    while (leftIndex !== rightIndex) {
        if (numbers[leftIndex] > numbers[rightIndex]) {
            minNumber = numbers[rightIndex];
            leftIndex++;
        } else {
            minNumber = numbers[leftIndex];
            rightIndex--;
        }
    }

    return minNumber;
}
//* Linear time complexity  O(n)

console.log(getMin([-1, 3.5, 5, -150, 20]));
