function negativePositive(array) {
    let newArr = array.slice(0);
    let filtered=[];
   newArr.forEach((num)=>{
    if(num<0){
        filtered.unshift(num);
    }
    if(num>=0) {
        filtered.push(num);
    }
   })
    console.log(filtered.join('\n'))
}
negativePositive([7, -2, 8, 9])