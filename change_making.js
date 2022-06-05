//? Given an array of available coins and a target value.
//? Write an algorightm that using the least amount of coins 
//? returns the coins and number of coins you want to use to reach that value.

//* Greedy
function computeChange(coins, targetAmount) {
    let remainingAmount = targetAmount;
    const calculatedChange = {
        selectedCoins: {},
        numberOfCoins: 0
    }

    for (const coin of coins) {
        const count = Math.floor(remainingAmount / coin);
        if (count > 0) {
            calculatedChange.selectedCoins[coin] = count;
            calculatedChange.numberOfCoins += count
            remainingAmount -= (coin * count);
        }
    }

    return calculatedChange;
}
const coins = [100, 50, 20, 10, 5, 2, 1]; //? Orderd and stable
const targetAmount = 129;
//* Linear Time Complexity (Greedy): 0(n)


//* Brute Force
function computeChangeBruteForce(coins, amount) {
    let results = [];

    for (let i = 0; i < coins.length; i++) {
        results.push(computeChange(coins.slice(i), amount));
    }

    let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
    let finalResult;
    for (const result of results) {
        if (result.numberOfCoins < smallestAmountOfCoins) {
            smallestAmountOfCoins = result.numberOfCoins;
            finalResult = result;
        }
    }

    return finalResult;
}
const coinsBruteForce = [8, 6, 5, 1]; //? Orderd and dynamic values
const targetAmountBruteForce = 11;
//* Linear Time Complexity (Brute Force): 0(n^2)

const change = computeChangeBruteForce(coinsBruteForce, targetAmountBruteForce);
console.log(change);


