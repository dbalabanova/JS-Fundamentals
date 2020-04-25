function words(array){
let sentence = array.shift().split(' ');
let words = array.pop();
//console.log(words);


    for (let j = 0; j < sentence.length; j++) {
        for (let i = 0; i < words.length; i++) {
            let currentLength = words[i].length;
        if(sentence[j].includes('_')){
            if(sentence[j][sentence[j].length-1]!='_'){
               let last =  sentence[j].split('')
               let remove = last.pop()
               let word = last.join('')
               if(word.length === currentLength){
                sentence[j] = words[i]+remove
            }
            } else {
                if(sentence[j].length === currentLength){
                    sentence[j]= words[i]
                }
            }
            
        }
        
    }

}
console.log(sentence.join(' '));

}
words(['Hi, grandma! I\'m so ____, to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['glad', 'bring', 'pie', 'During', 'amazing', 'pharmacist', 'sprained']]
)