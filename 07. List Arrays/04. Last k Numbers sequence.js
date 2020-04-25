function numbersSequence(n, k) {
    let output = [];
    output.push(1);
    for (let i = 0; i <=(n-2); i++) {
        let sum = 0;
    for (let j = 0; j < k; j++) {
        if((i-j)>=0) {
        sum += Number(output[i-j]);
        }
        }
        let current = sum;
        output.push(current)

    }
    console.log(output.join(' '));
    
}
numbersSequence(8,2)