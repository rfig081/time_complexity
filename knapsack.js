//? You got a list of items, every item has value and weight
//? You got a bag that holds a maximum weight of X
//? Write a program that maximizes the value but dont exceed the max weight

function knapsack(items, maxWeight) {
  const permuations = [];

  for (i = 1; i < items.length; i++) {
    let tempArray = [];

    tempArray[0].weight + tempArray[i].weight <= maxWeight;
  }

  return permutations;
}

console.log(
  knapsack(
    [
      { value: 10, weight: 20 },
      { value: 30, weight: 5 },
      { value: 20, weight: 200 },
      { value: 50, weight: 10 },
    ],
    20
  )
);
