function charInRange(firstChar, secondChar) {
 let firstNumber = firstChar.charCodeAt(firstChar);
 let secondNumber = secondChar.charCodeAt(firstChar);
    let output='';
    if(firstNumber<secondNumber){
 for (let i = firstNumber+1; i < secondNumber; i++) {
     output+= String.fromCharCode(i) + ' ';
     
 }
}
if(firstNumber>secondNumber){
    for (let j = secondNumber+1; j < firstNumber; j++) {
     output+= String.fromCharCode(j) + ' ';
        
        
    }
}
 console.log(output);
 
}
charInRange('C','#')