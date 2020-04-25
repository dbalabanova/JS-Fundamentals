function equalArays(firstArray, secondArray) {
    let equal = 0;
    let sumFirst = 0;
    let index = 0;
    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
        sumFirst += firstArray[i];
    }
    for (let i = 0; i < secondArray.length; i++) {
        secondArray[i] = Number(secondArray[i]);
        
    }
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            equal++;
            index = i;
            break;
        }
       
    }
    if (equal === 0) {
        console.log(`Arrays are identical. Sum: ${sumFirst}`);
    }
    else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);

    }
}
equalArays(['1','2','3','4','5'], ['1','2','4','4','5'])
