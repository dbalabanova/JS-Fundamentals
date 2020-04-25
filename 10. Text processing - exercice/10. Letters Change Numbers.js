function letToNum(array) {
    let separate = array.split(' ');
    let output = 0;
    
for (let i = 0; i < separate.length; i++) {
    let currentEl = separate[i].split('')
   if(separate[i]!=''){
       let firstLetter = currentEl.shift();
        let lastLetter=currentEl.pop();
        let number = Number(currentEl.join(''))
        if(firstLetter.charCodeAt()<=90&&firstLetter.charCodeAt()>=65){
            output+=(number/(firstLetter.charCodeAt()-64));
        } else if (firstLetter.charCodeAt()<=122&&firstLetter.charCodeAt()>=97)
    output+=(number*(firstLetter.charCodeAt()-96))
   
   if(lastLetter.charCodeAt()<=90 && lastLetter.charCodeAt()>=65){
       output-=(lastLetter.charCodeAt()-64)
   }else if(lastLetter.charCodeAt()<=122 && lastLetter.charCodeAt()>=97){
       output+=(lastLetter.charCodeAt()-96)
   }
}
}
console.log(output.toFixed(2));

}
letToNum('A12b s17G')
letToNum('P34562Z q2576f   H456z')
letToNum('a1A')