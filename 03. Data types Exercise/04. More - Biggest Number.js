function biggestNum(firstNumber, secondNumber,thirdNumber) {
let maxNumber = Number.MIN_SAFE_INTEGER;

if(firstNumber>maxNumber) maxNumber = firstNumber;
if(secondNumber>maxNumber) maxNumber = secondNumber;
if(thirdNumber>maxNumber) maxNumber = thirdNumber;
console.log(maxNumber);

}
biggestNum(43,43.2,43.3)