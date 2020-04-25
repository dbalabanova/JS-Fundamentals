function factorial(first,second) {
    let firstNum = first;
    let secondNum = second;
if(first==0 || first==1) firstNum=1;
if(second==0 || second==1) secondNum=1;

for (let i = firstNum-1; i >=1; i--) {
   firstNum=firstNum*i;
    
}
for (let j = secondNum-1; j >=1; j--) {
    secondNum=secondNum*j;
     
 }

let result = firstNum/secondNum;
console.log(result.toFixed(2));

}
factorial(5,2)