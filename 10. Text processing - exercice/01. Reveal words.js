function reveal(words, sentence){
    let wordsToSearch = words.split(', ')
    
    let setnenceSplit = sentence.split(' '); 
    let output ='' 
    for (let i = 0; i < wordsToSearch.length; i++) {
        let currentWordLength = wordsToSearch[i];
        for (let j = 0; j < setnenceSplit.length; j++) {
            let curretLength = setnenceSplit[j];
            if(currentWordLength.length===curretLength.length&&curretLength.includes('*')){
                output = sentence.replace(curretLength,currentWordLength);
                sentence=output;
            }
         
        }
        
    }
    
    console.log(output);
    
    }
    reveal('great',
    'softuni is ***** place for learning new programming languages')