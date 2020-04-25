function string(word, setence) {
let lowerCase = setence.toLowerCase();
let find = word.toLowerCase();
if(lowerCase.includes(word)){
    console.log(word);
} else {
    console.log(`${word} not found!`);
    
}
} 
string('python',
'JavaScript, is the best programming language'
)