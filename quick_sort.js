function sort(arr) {
    const cloneArray = [...arr];

    if (cloneArray.length <= 1) {
        return cloneArray;
    }

    const pivotElement = cloneArray.shift();

    const smallerElementsArray = [];
    const equalElementsArray = [pivotElement];
    const biggerElementsArray = [];

    while (cloneArray.length) {
        const currentElement = cloneArray.shift();

        if (currentElement < pivotElement) {
            smallerElementsArray.push(currentElement);
        } else if (currentElement > pivotElement) {
            biggerElementsArray.push(currentElement);
        } else {
            equalElementsArray.push(currentElement);
        }
    }

    const smallerElementsSortedArray = sort(smallerElementsArray);
    const biggerElementsSortedArray = sort(biggerElementsArray);

    return smallerElementsSortedArray.concat(
        equalElementsArray,
        biggerElementsSortedArray
    );
    //TODO change concat order if you want DESC results 
    //  return biggerElementsSortedArray.concat(equalElementsArray, smallerElementsSortedArray);
}
//* Log linear time complexity O(n * log n)
//* Constant space complexity  O(n)

const sortedArray = sort([10, -20, 50, 8, 5, 200]);
console.log(sortedArray);