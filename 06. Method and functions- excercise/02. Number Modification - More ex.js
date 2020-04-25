function modification(number) {
    let array = number.toString().split('');
    let sum = 0;
    let output = number;
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
      
    }
    for (let j = 0; j < 6; j++) {
        average=sum/(array.length);
        if(average<=5){
            array.push(9);
            sum+=9;
        }
        
    }
    
    
    console.log(array.join(''));

}
modification(101)