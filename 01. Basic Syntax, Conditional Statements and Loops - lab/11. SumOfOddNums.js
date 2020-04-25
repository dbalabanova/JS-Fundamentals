function solve(num) {
    let oddNum = 0;
    let sum = 0;
    for (let i = 1; i <=Number.MAX_SAFE_INTEGER; i++) {
        if (i % 2 != 0) {
            oddNum++;
            console.log(i);
            sum+=i;
        }
        if (oddNum == num) break;
    }
    console.log(`Sum: ${sum}`);
    
}
solve(5)