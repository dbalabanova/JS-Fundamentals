function manipulator(numbers, input) {

    for (let i = 0; i < input.length; i++) {
        let string = input[i].toString().split(' ');
        let command = string[0];
        if (command === 'add') {
            let index = Number(string[1]);
            let element = Number(string[2]);
            numbers.splice(index, 0, element)
        } else if (command === 'addMany') {
            let index = Number(string[1]);
            for (let j = string.length - 1; j >= 2; j--) {
                numbers.splice(index, 0, Number(string[j]))
            }
        } else if (command === 'contains') {
            let element = Number(string[1]);
            let index = numbers.indexOf(element);
            console.log(index);
        } else if (command === 'remove') {
            let index = Number(string[1]);
            numbers.splice(index, 1)
        } else if (command === 'shift') {
            let positions = Number(string[1]);
            for (let k = 0; k < positions; k++) {
                numbers.push(numbers[0]);
                numbers.shift();
            }
        } else if (command === 'sumPairs') {
            let sumPairs = [];

            if (numbers.length % 2 === 0) {
                for (let l = 0; l < numbers.length; l += 2) {
                    let current = numbers[l] + numbers[l + 1];
                    sumPairs.push(current);
                }
            } else {
                for (let m = 0; m < numbers.length - 1; m += 2) {
                    let current = numbers[m] + numbers[m + 1];
                    sumPairs.push(current);
                }
                sumPairs.push(numbers[numbers.length - 1])
            }
        numbers = sumPairs;

        } else if (command=='print') {
            break;
        }
    }

    console.log(numbers);


}


manipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)
manipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )
manipulator([1, 2, 3, 4, 5],
    ['sumPairs']
)
