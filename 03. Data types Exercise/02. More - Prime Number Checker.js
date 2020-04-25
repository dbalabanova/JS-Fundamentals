function isPrime(num) {
    let output = true;
    for(let i = 2; i <num; i++){
      if(num % i === 0) output = "false";
    }
    console.log(output);
    
  }

  isPrime(0)