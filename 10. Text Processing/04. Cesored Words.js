function censor(words,remove){
    index=0;
    let left=''
while(words.indexOf(remove,index)!=-1){
    index =words.indexOf(remove,index)+1;
    left = words.replace(remove,'*'.repeat(remove.length))
    words=left;
}
console.log(left);

}
censor('A small sentence with some words', 'small')