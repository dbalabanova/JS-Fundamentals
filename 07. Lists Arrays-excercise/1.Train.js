function train(array) {
let first = array[0].toString().split(' ');
let wagons = first.map(Number);
let maxCapacity = Number(array[1]);
for (let i = 2; i < array.length; i++) {
    let current = array[i].toString().split(' ');
    if(current[0]==='Add'){
        let add = Number(current[1]);
        wagons.push(add);
    } else {
        let passengers = current[0];
        for (let j = 0; j < wagons.length; j++) {
            let all = Number(passengers)+Number(wagons[j]);
            if(all<=maxCapacity){
            wagons[j] = all;
            break;
            } 
        }
    }
    
}
console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)