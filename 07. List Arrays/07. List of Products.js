function products(array) {
    let newArr = array.sort((a,b)=> a.localeCompare(b));
    for (let i = 0; i < newArr.length; i++) {
    console.log(`${i+1}.${newArr[i]}`);
     
    }
    
}
products(["Potatoes", "Tomatoes", "Onions", "Apples"])