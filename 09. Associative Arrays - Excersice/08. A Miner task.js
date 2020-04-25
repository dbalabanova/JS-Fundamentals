function task(array) {
    let miner = {};
for (let i = 0; i < array.length; i+=2) {
    let resourse = array[i];
    let quantity = Number(array[i+1]);
    if(!miner.hasOwnProperty(resourse)){
        miner[resourse]= quantity;
    } else {
        miner[resourse]+=quantity;
    }
}
let arrayMiner = Object.entries(miner)
for (let element of arrayMiner) {
console.log(`${element[0]} -> ${element[1]}`);
    
}

}
task([
    'Gold',
    '155',
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )