function odd(input) {
    let words = input.toLowerCase();
    let repeat = new Map();
    words = words.split(' ')
for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let count = 0;

    for (let j = 0; j < words.length; j++) {
        if(currentWord===words[j]){
        count++;
        repeat.set(currentWord,count)
        }
    }
}
let result = '';
let arrayWords = [...repeat.entries()]
.forEach(([key,value])=>{
    if (value%2!=0){
        result+=key+' '
    }
});
console.log(result)

}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')