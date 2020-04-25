function maxNum(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let isTrue = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTrue = false;
                break;
            }
          
        }
        if (isTrue) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(" "));

}
maxNum([41, 41, 34, 20])