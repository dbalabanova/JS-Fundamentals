function diagonal(array) {
    let row;
    let matrix = [];
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let result;
    for (let i = 0; i < array.length; i++) {
        row = array[i].toString().split(' ');
        for (let j = 0; j <= 0; j++) {
            matrix.push(row);

        }

    }

    for (let k = 0; k < array.length; k++) {
        current = matrix[k][k];
        firstDiagonal += Number(current);
        
    }
    for (let l = array.length - 1; l >= 0; l--) {
        let secondcurrent = matrix[array.length - 1 - l][l]
        secondDiagonal += Number(secondcurrent);
    
    }

    if (firstDiagonal === secondDiagonal) {
        for (let m = 0; m < matrix.length; m++) {
            for (let n = 0; n < matrix.length; n++) {
                if (m != n && m != matrix.length-1-n)
                    matrix[m][n] = firstDiagonal;
                }
                
        }
        result = matrix;

    }
    else {
        result = matrix;

    }
    for (let o = 0; o < matrix.length; o++) {
        console.log(result[o].join(' '));
        
        
    }
}
diagonal(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)