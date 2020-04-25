function sumDigits(number) {
let digits = number.toString();
let sum = 0;
for (let i = 0; i < digits.length; i++) {
sum += Number(digits[i]);
    
}
console.log(sum);

}
sumDigits(543)