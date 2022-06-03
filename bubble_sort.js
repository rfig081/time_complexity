function sort(arr) {
    const cloneArray = [...arr];

    for (let outer = 0; outer < cloneArray.length; outer++) {
        let outerEl = cloneArray[outer];

        for (let inner = outer + 1; inner < cloneArray.length; inner++) {
            let innerEl = cloneArray[inner];

            if (outerEl < innerEl) {
                cloneArray[outer] = innerEl;
                cloneArray[inner] = outerEl;

                outerEl = cloneArray[outer];
                innerEl = cloneArray[inner];
            }
        }
    }

    return cloneArray;
}
//* Quadratic time complexity O(n^2)
//* Constant space complexity  O(1)

const sortedArray = sort([10, -20, 50, 8, 5, 200]);
console.log(sortedArray);