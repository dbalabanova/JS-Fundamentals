function loadingBar(number) {
    let firstSymbol = number/10;;
    let output = '';
    for (let i = 1; i <= firstSymbol; i++) {
        output+='%'
    }
    for (let j = 0; j < 10-firstSymbol; j++) {
        output+='.'
        
    }
    if(firstSymbol===10){
        console.log('100% Complete!');
        console.log(`[${output}]`);
    }
    
    else {
        console.log(`${number}% [${output}]`);
        console.log(`Still loading...`);
        
    }

}
loadingBar(30)