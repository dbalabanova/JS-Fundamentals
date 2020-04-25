function rightPlace(firstString, char, secondString) {
let correctWord = firstString.replace('_', char)
let output = correctWord===secondString ? "Matched" : "Not Matched"
console.log(output);
}
rightPlace("Str_ng", "i", "String")