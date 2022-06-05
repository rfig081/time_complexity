//? You got a list of items, every item has value and weight
//? You got a bag that holds a maximum weight of X
//? Write a program that maximizes the value but dont exceed the max weight

function knapsack(items, capacity) {
    const sack = { items: [], value: 0, weight: 0 };
    let remainingCapacity = capacity;

    for (const item of items) {
        if (item.weight <= remainingCapacity) {
            sack.items.push(item);
            sack.value += item.value;
            sack.weight += item.weight;
            remainingCapacity -= item.weight;
        }
    }
    return sack;
}
const items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'c', value: 6, weight: 8 },
    { name: 'd', value: 10, weight: 3 },
    { name: 'e', value: 50, weight: 10 },
];
const capacity = 8;
const sack = knapsack(items, capacity, items.length - 1)
console.log(sack);
//! Greedy approach doesn't solve the problem
