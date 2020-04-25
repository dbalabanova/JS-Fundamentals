function magic (array) {
    let row = 0;
    let column=0;
    let isTrue=true;
    let firstRow = 0;
    let firstColumn = 0;
    for (let i = 0; i < array.length; i++) {
        row=0;
        column=0;
firstColumn=0;
firstRow=0;
        for (let j = 0; j < array[i].length; j++) {
            firstRow+=array[0][j];
            row+=array[i][j];
        }
            for (let k = 0; k < array.length; k++) {
                firstColumn+=array[k][0];
                column+=array[k][i];

            }
            
             
        if(row!=column||row!=firstRow||row!=firstColumn||column!=firstColumn||column!=firstRow) isTrue=false;
        
      
    }
    if(isTrue) console.log('true');
    else console.log('false');
    
    }
magic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   )