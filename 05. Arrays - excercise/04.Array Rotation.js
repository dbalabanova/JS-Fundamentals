function arrayRotation(array, rotation) {
    let output = "";
    for (let i = 0; i < rotation; i++) {
        array.push(array.shift())
    }
    for (let j = 0; j < array.length-1; j++) {
        output+=array[j]+" "
        
    }
    console.log(output+array[array.length-1]);

}
arrayRotation([51, 47, 32, 61, 21], 2)