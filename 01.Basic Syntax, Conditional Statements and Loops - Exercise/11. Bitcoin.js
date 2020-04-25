function solve(input) {
    let gold = 67.51;
    let bitcoin = 11949.16;
    let inputArray = input;
    let currentGold = 0;
    let currentProfit = 0;
    let profit = 0;
    let day = 0;
    let count = 0;
    let theDay = 0;
    let numBitcoins = 0;
    for (let i = 0; i < inputArray.length; i++) {
        day++;
        count++;
        currentGold = inputArray[i];
        currentProfit = currentGold * gold;
        if (day == 3) {
            currentProfit = currentGold * 0.7 * gold;
            day = 0;
        }
        profit += currentProfit;
        if (profit >= bitcoin) {
            for (let j = profit; j > bitcoin; j -= bitcoin) {
                numBitcoins++;
                profit -= bitcoin;
                if (numBitcoins == 1) theDay = count;
            }
        }



    }

    console.log(`Bought bitcoins: ${numBitcoins}`);
    if (numBitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${theDay}`);
    }
    console.log(`Left money: ${profit.toFixed(2)} lv.`);

}

solve([3124.15, 504.212, 2511.124])