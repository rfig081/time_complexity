function getPermutations(options) {
  const permutations = [];

  if (options.length === 1) {
    console.log(options);
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));

  const firstOption = options[0];
  console.log(firstOption);

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
    console.log(partialPermutation, "pp");

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationsInFront = partialPermutation.slice(0, j);
      const permutationsAfter = partialPermutation.slice(j);
      permutations.push(
        permutationsInFront.concat([firstOption], permutationsAfter)
      );
    }
  }
  console.log(permutations);
  console.log("_______________________________");

  return permutations;
}

const todoList = [
  "walk the dog",
  "clean the toilet",
  "buy groceries",
  "order food",
];

const result = getPermutations(todoList);

// console.log(result);
