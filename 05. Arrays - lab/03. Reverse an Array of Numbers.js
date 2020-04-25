function reverseNum(number, array) {
    let output = '';
for (let i = number-1; i >=0; i--) {
    output +=array[i] + ' ';
    
}
console.log(output);

}
reverseNum(2, [10, 20, 30, 40, 50])