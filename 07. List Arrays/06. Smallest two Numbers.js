function smallest(array) {
    let newArr = array.sort((a,b)=> a-b);
    let output  = newArr.slice(0,2)
    console.log(output.join(' '));
    
}
smallest([30, 15, 50, 5])