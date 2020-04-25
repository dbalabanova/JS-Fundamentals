function cone(radius, height) {
let volume = (Math.PI*(Math.pow(radius,2))*height)/3;
let s = Math.sqrt(((Math.pow(radius,2)))+(Math.pow(height,2)));
let B = Math.PI*radius*s;
let S = Math.PI*radius*radius;
 let surface = S+B;
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${surface.toFixed(4)}`);

}
cone(3,5)