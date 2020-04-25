function phone(array) {
    let pattern = /(?<!\d)\+359([ -])2\1\d{3}\1\d{4}\b/g
    let number
    let numbers = [];
    while((number = pattern.exec(array))!==null){
        numbers.push(number[0])
    }
    console.log(numbers.join(', '));
    
    }