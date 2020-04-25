function specialNum(n) {
    let output = ''
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let string = i.toString();


        for (let j = 0; j < string.length; j++) {
            let num = (string[j]);
            sum += Number(num);
            
        }
        if (sum===5|| sum==7|| sum ==11) {
            console.log(`${i} -> True`);
        }
        else{
            console.log(`${i} -> False`);
            
        }
        sum=0;
    }
}
specialNum(300)