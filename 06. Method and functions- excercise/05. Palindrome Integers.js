function palindromeInt(array) {

    for (let i = 0; i < array.length; i++) {
        let forward = '';
        let backward = '';
        let current = array[i].toString();
        for (let j = 0; j < current.length; j++) {
            //let string = array[j].toString;
            forward += current[j];
        }

        for (let k = current.length - 1; k >= 0; k--) {
           // let stringBack = array[k].toString;
            backward += current[k];

        }

        let output = (forward === backward) ? 'true' : 'false'
        console.log(output);
        
    }
    
    
}
palindromeInt([123,323,421,121])
palindromeInt([32,2,232,1010])