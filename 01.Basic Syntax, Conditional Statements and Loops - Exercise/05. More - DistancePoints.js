function solve(x1,y1,x2,y2) {
let maxX= Math.max(x1,x2);
let maxY = Math.max(y1,y2);
let minX = x1+x2-maxX;
let minY = y1+y2-maxY;

let a = maxX-minX;
let b = maxY-minY;
let z = Math.sqrt(a*a +b*b);
console.log(z);
}
solve(2.34, 15.66, -13.55, -2.9985)