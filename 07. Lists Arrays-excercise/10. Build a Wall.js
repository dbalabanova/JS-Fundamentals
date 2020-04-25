function wall(input) {
let array = input.map(Number);
let output = [];
for (let i = 0; i < 30; i++) {
    let currentConcrete = 0;
    for (let j = 0; j < array.length; j++) {
    let current = Number(array[j]);

        if(current<30) { 
            currentConcrete += 195;
            array[j]=array[j]+1;
        }
    }
    if(currentConcrete===0) break;
    output.push(currentConcrete);
}
let sum = 0;
output.forEach((num)=>sum+=num )
console.log(output.join(', '));
console.log(`${sum*1900} pesos`);

}
wall([21, 25, 28])
wall([17])
wall([17, 22, 17, 19, 17])