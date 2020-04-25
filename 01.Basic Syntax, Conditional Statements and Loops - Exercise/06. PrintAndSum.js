function solve(start, end) {
    let sum = 0;
    let sameLine = "";
    for (let i = start; i <= end; i++) {
        sameLine+= i + " ";
        sum += i;
    }
    console.log(sameLine)
    console.log(`Sum: ${sum}`);
    }
    solve(5,10)