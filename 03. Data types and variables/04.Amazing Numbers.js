function amazing(number) {
    let thenum = number.toString();
let sum = 0;
for (let i = 0; i <thenum.length; i++) {
    let current = thenum[i];
    sum+=Number(current);
   }
let output = sum.toString().includes('9') ? " Amazing? True" : " Amazing? False"
console.log(number+output);
}
amazing(583472)