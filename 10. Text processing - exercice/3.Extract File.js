function extract(input) {
let lastIndex = input.lastIndexOf('\\');
let lastIndexDot = input.lastIndexOf('.');
let name = input.substring(lastIndex+1,lastIndexDot);
let extention = input.substring(lastIndexDot+1)
console.log(`File name: ${name}`)
console.log(`File extension: ${extention}`)
}
extract('C:\\Internal\\training-internal\\Template.pptx')