function sort(arr) {
    if (arr.length < 2) return arr;
    if (arr.length === 2) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;

    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    //TODO Recursion
    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);

    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    while (leftArrayIndex < leftSortedArray.length || rightArrayIndex < rightSortedArray.length) {
        if (leftArrayIndex >= leftSortedArray.length || leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
            mergedArray.push(rightSortedArray[rightArrayIndex]);
            rightArrayIndex++;
        } else {
            mergedArray.push(leftSortedArray[leftArrayIndex]);
            leftArrayIndex++;
        }
    }

    return mergedArray;
}
//* Log linear time complexity O(n * log n)
//* Linear space complexity  O(n)

const sortedArray = sort([10, -20, 50, 8, 5, 200]);
console.log(sortedArray);