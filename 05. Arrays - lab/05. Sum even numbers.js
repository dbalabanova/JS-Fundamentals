function sumEvenNum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = Number(array[i]);
        if(currentNum)
        sum += currentNum;
    }
    console.log(sum);
    }
    sumEvenNum(['1','2','3','4','5','6'])