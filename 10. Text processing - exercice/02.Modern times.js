function modern(string){
    let splited =string.split(' ')
    let hashtag =[];
    let correct ='';
    let toPush ='';
    for (let i = 0; i < splited.length; i++) {
        if(splited[i].includes('#') && splited[i].length>1){
            correct = splited[i].substring(1)

            if(/^[a-zA-Z]+$/.test(correct)){
            hashtag.push(correct)

            }
        }
        
    }
    for (let word of hashtag) {
    console.log(word)
        
    }
}
modern('Nowadays everyone uses # to tag a #special word in #socialMedia')
