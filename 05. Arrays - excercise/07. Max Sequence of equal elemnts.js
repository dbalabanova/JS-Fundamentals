function solve(array) {
    let maxEqual = 0;
    let equal=0;
    let currentequal = 0;
    let newArr = [];
    let currentArr=[];
    for (let i = 0; i < array.length; i++) {
        if(array[i]===array[i+1]){
            currentequal++;
            currentArr.push(array[i])
            currentArr.push(array[i+1])
        }
        
        if(array[i]!=array[i+1]){
            equal=currentequal;
            newArr=currentArr;
            currentequal=0;
            currentArr=[];
            
        } 
        
    }
    if(equal>maxEqual){
        console.log(newArr.join(' '));
                
                
            }

    
}
solve([1, 1, 1, 2, 3, 1, 3, 3])