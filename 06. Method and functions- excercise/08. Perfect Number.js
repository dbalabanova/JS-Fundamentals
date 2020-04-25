function perfectNumber(number) {
    let divisors = 0;
    for (let i = 1; i <number; i++) {
        if(number%i==0) divisors+=i;
        
    }
    if(number===divisors) console.log('We have a perfect number!');
    else console.log("It's not so perfect.");
    
}
perfectNumber(1236498)