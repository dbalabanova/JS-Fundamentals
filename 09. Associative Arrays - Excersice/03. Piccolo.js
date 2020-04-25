function piccolo(array) {
    let parked = new Set();
    for (let i = 0; i < array.length; i++) {
        let [command, carNumber] = array[i].split(', ');
        if(command==='IN'){
            parked.add(carNumber)
        } else if (command === 'OUT') {
            parked.delete(carNumber)
        }
        
    }
    let sorted = [...parked]
    .sort((a,b)=>a>b);

    sorted
    .forEach((car)=>{
        console.log(car);
    })
    
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)