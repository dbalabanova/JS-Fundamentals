function oddNums(array) {
    let newArr=[];
    for (let i = 0; i < array.length; i++) {
        if(i%2!=0){
newArr.unshift(array[i]*2);
        }
        
    }
    console.log(newArr.join(' '));
    
}
oddNums([10, 15, 20, 25])