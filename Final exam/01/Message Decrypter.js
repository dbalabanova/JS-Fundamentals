function message(array) {
    let number = array.shift();
    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1:[\s]\[(?<first>(\d+))\]\|\[(?<second>(\d+))\]\|\[(?<third>(\d+))\]\|$/g
    for (let line of array) {
        if (line.match(pattern)) {
            let message = [];
            let current = pattern.exec(line);
            let tag = current.groups.tag;
            let fisrtNumber = String.fromCharCode(Number(current.groups.first));
            let secondNumber = String.fromCharCode(Number(current.groups.second));
            let thirdNumber = String.fromCharCode(Number(current.groups.third));
            message.push(fisrtNumber, secondNumber, thirdNumber)
           console.log(`${tag}: ${message.join('')}`);
           
        } else {
            console.log(`Valid message not found!`);

        }
    }
}
message(['4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'])
message(['3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'])