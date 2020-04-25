function froggy(array) {
    let frogNames = array.shift().split(' ');

    for (let line of array) {
        let [command, firstElement, secondElement] = line.split(' ');

        if (command === 'Join'&& !frogNames.includes(firstElement)) {
            frogNames.push(firstElement);
        } else if (command === 'Jump'&& !frogNames.includes(firstElement)) {
            secondElement = Number(secondElement);
            if (frogNames.length > secondElement&& secondElement>=0) {
                frogNames.splice(secondElement, 0, firstElement);
            }
        } else if (command === 'Dive') {
            firstElement = Number(firstElement);
            if (frogNames.length > firstElement&& firstElement>=0) {
                frogNames.splice(firstElement, 1);
            }
        } else if (command === 'First') {
            firstElement = Number(firstElement);
            if (frogNames.length >= firstElement) {
                let printFirst = frogNames.slice(0, firstElement);
                console.log(printFirst.join(' '));
            } else if(frogNames.length<firstElement){
                printFirst = frogNames.slice();
                console.log(printFirst.join(' '));
            }
        } else if (command === 'Last') {
            firstElement = Number(firstElement);
            if (frogNames.length >= firstElement) {
                let printLast = frogNames.slice(frogNames.length-firstElement);
                console.log(printLast.join(' '));
            } else if (frogNames.length<firstElement) {
                printLast = frogNames.slice();
                console.log(printLast.join(' '));
            }

        } else if (command === 'Print') {
            if (firstElement === 'Normal') {
                console.log(`Frogs: ${frogNames.join(' ')}`);
                break;
            } else if (firstElement === 'Reversed') {
                frogNamesReversed = frogNames.slice().reverse();
                console.log(`Frogs: ${frogNamesReversed.join(' ')}`);
                break;
            }
        }
    }


}


froggy(['Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Reversed'
])
froggy(['A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'First 3',
    'Last 30',
    'Dive 2',
    'Print Normal',
    'Print Reversed'
    ])

    // firstElement=Number(firstElement);
        // if(array.length>firstElement){