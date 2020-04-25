function equalSums(array) {
    let position = -1;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += array[j];
        }
        for (let k = i+1; k < array.length; k++) {
            rigthSum+=array[k];
            
        }
        if(leftSum===rigthSum) position=i;
    }
    console.log(position!=-1 ? position : 'no');
    
}

equalSums([1,2,3,3])