function remove(removed,word){
    let index=0
    let replaced=''
while(word.indexOf(removed,index)!=-1){
index = word.indexOf(removed,index+1)
    
       replaced = word.split(removed);
       word=replaced.join('')
}
 console.log(word);
 
}
remove('ice', 'kicegiciceeb')