function arrayManipulator(numbers, commands) {
    for (let i = 0; i < commands.length; i++) {
        let string = commands[i].toString().split(' ');

        if (string[0] === 'add') {
            let index = Number(string[1]);
            let element = Number(string[2]);
            numbers.splice(index, 0, element);
        } else if (string[0] === 'addMany') {
            let firstIndex = Number(string[1]);
            for (let k = string.length-1; k >=2; k--) {
            numbers.splice(firstIndex, 0, Number(string[k]));
            }
        } else if (string[0] === 'contains') {
            let search = Number(string[1]);
            let include = numbers.indexOf(search);
            if(include === -1){
                console.log('-1')
            } else {
                console.log(include);
            }
        } else if (string[0] === 'remove') {
            let index = string[1];
            numbers.splice(index, 1);
        } else if (string[0] === 'shift') {
            let positions = Number(string[1]);
            for (let i = 0; i < positions; i++) {
                numbers.push(numbers[i]);
                numbers.shift();
            }
        } else if (string[0]==='sumParis') {
            for (let j = 0; j < numbers.length; j+=2) {
                let sum = numbers[i]+numbers[i+1];
                numbers =[];
                numbers.push(sum);
                
            }
        } else if (string[0]==='print') {
            break;
        }


    }
    console.log(numbers);

}
// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )