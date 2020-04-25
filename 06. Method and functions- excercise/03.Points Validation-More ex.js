function validation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];
    let firstSide = 0;
    let secondSide = 0;
    let distance = 0;
    let firstLength = '';
    let secondLength = '';
    let AllLength = '';
    if (x1 > x2) firstSide = x1 - x2;
    else if (x2 > x1) firstSide = x2 - x1;
    if (y1 > y2) secondSide = y1 - y2;
    else if (y2 > y1) secondSide = y2 - y1;
    distance = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
    if (Number.isInteger(distance)) AllLength = 'is valid';
    else AllLength = 'is invalid'
    if (x1 != 0 && y1 != 0) {
        firstSide =x1;
        secondSide = y1;
        let firstDistance = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
        if(Number.isInteger(firstDistance)) firstLength='is valid';
        else firstLength='is invalid'
    }
    else if(x1===0 && Number.isInteger(y1) || y1===0 && Number.isInteger(x1) ) firstLength = 'is valid';
    if (x2 != 0 && y2 != 0) {
        firstSide=x2;
        secondSide=y2;
        let secondDistance = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));
        if(Number.isInteger(secondDistance)) secondLength='is valid';
        else secondLength='is invalid'
       
    }

    else if (x2===0 && Number.isInteger(y2) || y2===0 && Number.isInteger(x2)) secondLength = 'is valid';

    
    console.log(`{${x1}, ${y1}} to {0, 0} ${firstLength}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${secondLength}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${AllLength}`);


}
validation([2, 1, 1, 1])