function enigma(array) {
    let numberMessages = array.shift();
    let numRemove = [];
    let fixedArr = [];
    let attacked = [];
    let destroyed = [];
    array.forEach((message) => {
        let pattern = /[star]/gi;
        debugger
        let currentNum = message.match(pattern)
        
        if(currentNum===null)currentNum=0;
        else {
        currentNum = currentNum.join('').length
        }
        let fullMessage = '';
        let newMessage = message.split('').map((el) => {
            el = String.fromCharCode(el.charCodeAt() - currentNum)
            fullMessage += el;
        })
        fixedArr.push(fullMessage);
        
    })
    //let pattern = /@[a-zA-Z]+)[^\-\!:\>@]*:[0-9]+[^\-\!:\>@]*!A![^\-\!:\>@]*->[0-9]+/g;
   fixedArr.forEach((e)=>{
    if(e.match(/@[a-zA-Z]+[^-!:\>@]*:[0-9]+[^-!:>@]*!A![^-!:>@]*->[0-9]+/g)){
        let planetName = e.match(/(?<=\@)[a-z]+/gi).join('')
        attacked.push(planetName)
    }else if (e.match(/@[a-zA-Z]+[^\-\!:\>@]*:[0-9]+[^\-\!:\>@]*!D![^\-\!:\>@]*->[0-9]+/g)){
     let planetName = e.match(/(?<=\@)[a-z]+/gi).join('')
     destroyed.push(planetName)
    }
   })
  
    // while ((current = pattern.exec(fixedArr)) !== null) {
    //     let attack = current.groups.attackType;
    //     // let population = current.groups.population;
    //     let planetName = current.groups.planetName;
    //     //let soldierCount = current.groups.soldierCount;
    //     if (attack === 'A') {
    //         attacked.push(planetName)
    //     }else {
    //        destroyed.push(planetName)
    //     }
    // }
    let sortedAttacked = attacked.sort((a,b)=>a.localeCompare(b))
    let sortedDestroyed = destroyed.sort((a,b)=>a.localeCompare(b));
    console.log(`Attacked planets: ${attacked.length}`);
    if(attacked.length>0){
        sortedAttacked.forEach((e)=>{
            console.log(`-> ${e}`);
            
        })
    }
    console.log(`Destroyed planets: ${destroyed.length}`);
    if(destroyed.length>0){
        sortedDestroyed.forEach((e)=>{
            console.log(`-> ${e}`);
            
        })
    }
}

enigma(['2',
    'CDoghudd4=63333$D$053333',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])

enigma(['3',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])