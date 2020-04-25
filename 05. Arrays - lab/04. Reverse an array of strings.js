function reverseString(array) {
    let newArr = array.pop();
let output = "";

for (let i = array.length-1; i >=0; i--) {
    output+=array[i]+" ";
}
console.log(newArr+" "+output);

}
reverseString(['a', 'b', 'c', 'd', 'e'])