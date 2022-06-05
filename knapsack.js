//? You got a list of items, every item has value and weight
//? You got a bag that holds a maximum weight of X
//? Write a program that maximizes the value but dont exceed the max weight

function knapsack(items, capacity, itemIndex) {
  if (capacity === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (capacity < items[itemIndex].weight) {
    return knapsack(items, capacity, itemIndex - 1);
  }

  const capacityLeft = capacity - items[itemIndex].weight;
  const sackWithItem = knapsack(items, capacityLeft, itemIndex - 1);
  const sackWithoutItem = knapsack(items, capacity, itemIndex - 1);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: valueWithItem,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
    return updatedSack;
  } else {
    return sackWithoutItem;
  }
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
