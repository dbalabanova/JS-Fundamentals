function condense(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    while (array.length > 1) {
        for (let j = 0; j < array.length-1; j++) {
            sum += array[j] + array[j+1];
            let newArray= array.shift();
        }
    }
    console.log(sum);
    
}
condense([2,10,3])