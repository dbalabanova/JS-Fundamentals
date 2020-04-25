function bomb(numbers, special) {
    let bomb = special[0];
    let power = special[1];
    for (let i = 0; i < numbers.length; i++) {
        let firstBomb = numbers.indexOf(bomb);
        if(firstBomb!=-1){
        if (firstBomb - power >= 0 && firstBomb + power <= numbers.length) {
            numbers.splice(firstBomb - power, (2*power+1));
        } else if (firstBomb - power < 0 && firstBomb + power <= numbers.length) {
            let newNumbers = numbers.slice(firstBomb);
             newNumbers.splice(0,power+1);
             numbers = newNumbers;
        } else if (firstBomb - power >= 0 && firstBomb + power > numbers.length) {
            numbers.splice((firstBomb - power))
        }
    }

    }
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        sum+=numbers[j];
        
    }
    console.log(sum);

}



bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
    bomb([1, 4, 4, 2, 8, 9, 1],
        [9, 3]
        );
        bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
            [2, 1]
            );
            bomb([1, 7, 7, 1, 2, 3],
                [7, 1]
                )
                bomb([1,2,1,2,1],[2,2])