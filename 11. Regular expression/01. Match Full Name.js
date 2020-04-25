function fullName(array){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let validnames = [];
    let name ;
    while((name= pattern.exec(array))!==null){
        validnames.push(name[0])
        
    }
    console.log(validnames.join(' '));
    
    }