function binaryToDecimal(number) {
    let current = 0;
    let decimal = 0;
for (let i =0 ; i <(number.length); i++) {
    let a = ((number.length-1)-i)
    current = Number(number[a]);
    decimal+=(current*(Math.pow(2,i)));
       
}
console.log(decimal);

}
binaryToDecimal("11110000")