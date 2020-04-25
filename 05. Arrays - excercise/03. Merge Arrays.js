function merge(firstArray, secondArray) {
    let thirdArray = [];
    let output="";
    for (let i = 0; i < firstArray.length; i++) {

        if (i % 2 === 0) {
            thirdArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        }
        else if (i % 2 !== 0) {

            thirdArray[i] = firstArray[i] + secondArray[i];
        }
    }
    for (let j = 0; j < thirdArray.length-1; j++) {
        output += thirdArray[j] + " - "
      
    }
    console.log(output+thirdArray[(thirdArray.length-1)]);
    
}
merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)