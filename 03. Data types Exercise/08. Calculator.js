function calculator(number, operator,secondnumber) {
if(operator==="*"){
    console.log((number*secondnumber).toFixed(2));
    } else if ( operator==="/"){
    console.log((number/secondnumber).toFixed(2));
    }  else if ( operator==="+"){
        console.log(((number+secondnumber).toFixed(2)));
        }else if ( operator==="-"){
            console.log((number-secondnumber).toFixed(2));
            }else if ( operator==="%"){
                console.log((number%secondnumber).toFixed(2));
                }
            
}
calculator(5,
    '%',
    10
    )