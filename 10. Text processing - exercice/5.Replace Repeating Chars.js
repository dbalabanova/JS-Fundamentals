function chars(input) {
let output = input[0];
for (let i = 1; i < input.length; i++) {
if(input[i]!==input[i-1]){
output+=input[i]
}
}
console.log(output);

}
chars('aaaaabbbbbcdddeeeedssaa')
chars('qqqwerqwecccwd')