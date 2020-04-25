function oddOrEven(number) {
    let string = number.toString();
let splitNumber = string.split('');
let oddSum = 0;
let evenSum = 0;
//console.log(splitNumber);
for (let i = 0; i < splitNumber.length; i++) {
    if(splitNumber[i]%2===0){
        evenSum+=Number(splitNumber[i]);
    }
    else oddSum+=Number(splitNumber[i]);
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddOrEven(1000435)