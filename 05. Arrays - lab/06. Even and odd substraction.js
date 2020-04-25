function evenAndOdd(array) {
    let even = 0;
    let odd = 0;
for (let i = 0; i < array.length; i++) {
    array[i]= Number(array[i]);
    }
    for(let number of array){
        if(number%2===0) {
            even+=number;
        } else {
            odd+=number
        }
        
    }
    let sum = even - odd;
    console.log(sum);
    
}
evenAndOdd([3,5,7,9])