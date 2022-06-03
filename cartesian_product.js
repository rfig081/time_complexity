function cartProduct(setA, setB) {
    const products = [];

    for (let elA of setA) {
        if (!Array.isArray(elA)) {
            elA = [elA];
        }

        for (const elB of setB) {
            products.push([...elA, elB]);
        }
    }

    return products;
}
//* Time complexity: O(n*m) | Worst Case: O(n^2)
//* Space complexity:  O(n*m) | Worst Case: O(n^2)

function cartesian(...sets) {
    let tempProduct = sets[0];

    for (let i = 1; i < sets.length; i++) {
        tempProduct = cartProduct(tempProduct, sets[i]);
    }
    return tempProduct;
}
//* Time complexity: O(n^x)
//* Space complexity:  O(n^x)


console.log(cartesian(
    ['BLACK', 'BLUE'],
    ['S', 'M', 'L', 'XL'],
    ['SLIM', 'FLEX', 'SKINNY']
));
