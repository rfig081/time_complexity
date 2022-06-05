// g(options=1) [["order"]]
// g(options=2) [["buy", "order"], ["order", "buy"]]
// g(options=3) 
// g(options = 4)
// 

function getPermutations(options) {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));
  //* [["buy", "order"], ["order", "buy"]]

  const firstOption = options[0];
  //* "clean"

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i]; //* ["order", "buy"]

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationsInFront = partialPermutation.slice(0, j); //* []
      const permutationsAfter = partialPermutation.slice(j); //* ["order", "buy"]
      permutations.push(
        permutationsInFront.concat([firstOption], permutationsAfter) //* ["clean", "order", "buy"]
      ); //* [
      //* ["clean", "buy", "order"], ["buy", "clean", "order"], ["buy", "order", "clean"],
      //* ["clean", "order", "buy"], ["order", "clean", "buy"], ["order", "buy", "clean"],
      //*  ]
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

console.log(result);
