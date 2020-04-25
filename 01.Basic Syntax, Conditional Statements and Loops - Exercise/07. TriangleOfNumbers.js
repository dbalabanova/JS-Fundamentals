function solve(n) {

    let sameLine = "";
    for (let i = 1; i <= n; i++) {
        sameLine = i + " ";

        for (let j = 1; j < i; j++) {
            sameLine += i + " ";

        }
        console.log(sameLine);


    }

}
solve(3)