function sorting(array) {
    let output = [];
    let ascending = array.sort((a, b) => b - a);

    for (let i = 0; i < ascending.length; i++) {
        if(output.length>= array.length) break;
        if(i===ascending.length-1-i) {
            output.push(ascending[i]);
            break;
        }
        output.push(ascending[i], ascending[ascending.length - 1 - i]);
        
    }
    console.log(output.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94,100])