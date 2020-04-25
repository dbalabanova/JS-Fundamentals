function sumFirstLast(string) {
let first = Number(string.shift());
let last = Number(string.pop())
let sum = first+last;
console.log(sum);
}
sumFirstLast(['20','30','40'])