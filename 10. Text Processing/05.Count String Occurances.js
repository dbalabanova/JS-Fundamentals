function count(words, remove){
    let splited = words.split(' ');
    let count = 0;
    for (let i = 0; i < splited.length; i++) {
        if(splited[i]===remove) count++;
        
    }
    console.log(count)
    }
    count('This is a word and it also is a sentence','is')