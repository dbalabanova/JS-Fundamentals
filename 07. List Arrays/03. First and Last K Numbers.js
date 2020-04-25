function kNumbers(array) {
let k = array[0];
let copyArr = array.slice(0);
let first = copyArr.slice(1,k+1);
let last = copyArr.slice(copyArr.length-k)
console.log(first.join(' '));
console.log(last.join(' '));
}
kNumbers([3, 
    7, 8, 9,10]
    )