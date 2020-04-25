function ladybugs(input) {
    let array = [];
    for (let i = 0; i < input.length; i++) {
        input[0]= Number(input[0]);

        array.length = input[0];
        let result = input.filter(element=> element!=undefined)
console.log(result);

        for (let j = 0; j < input[1].length; j++) {
            
            
        }
        
        
    }
    console.log(input[1].length);
    console.log(input[1]);


}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
)