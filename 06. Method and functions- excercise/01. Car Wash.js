function  carWash(array) {
    let percentage =0;
for (let i = 0; i < array.length; i++) {
if(array[i]==='soap') {
    percentage+=10;
}
else if (array[i]==='water'){
    percentage = percentage*1.2;
}
else if (array[i]==='vacuum cleaner') {
    percentage = percentage*1.25;
}
 else {
     percentage = percentage*0.9;
 }
}
console.log(`The car is ${percentage.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])