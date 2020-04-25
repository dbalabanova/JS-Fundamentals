function addOr (array) {
    let sum = 0;
    let newSum = 0;
    //let newArray[i] = array[i];
    for (let j = 0; j < array.length; j++) {
    sum+=Number(array[j]);
        
    }
for (let i = 0; i < array.length; i++) {
    array[i]=Number(array[i]);
    if (array[i]%2===0){
        let evenNumber = array[i]+i;
        array[i] = evenNumber;
        newSum+=array[i];
    }
    else if (array[i]%2!==0){
        let oddNumber = array[i]-i;
        array[i]=oddNumber;
        newSum+=array[i]
    }

    }
    console.log(array);
    console.log(sum);
    console.log(newSum);
    
}
addOr([-5, 11, 3, 0, 2])