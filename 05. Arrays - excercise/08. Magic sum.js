function magic(array, number) {
    for (let i = 0; i < array.length; i++) {
        //currentSum = 0;
        //let newArray = [];
        for (let j = i+1; j < array.length; j++) {
            //let currentSum = array[i] + array[j];

            if ((array[i] + array[j]) === number) {
               // newArray.push(array[i]);
                //newArray.push(array[j]);
                console.log(array[i]+ ' '+ array [j]);
            
            } 

        }
    }

}
magic([1, 7, 6, 2, 19, 23],
    8
)
magic([14, 20, 60, 13, 7, 19, 8],
    27

)
