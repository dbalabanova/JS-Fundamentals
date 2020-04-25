function fuel (distance,passengers,price) {
//let addFuel = (passengers*100)/1000;
let allFuel = (distance/100)*7;
let neededMoney = (allFuel + passengers*0.1)*price;
console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
fuel(260, 9, 2.49)