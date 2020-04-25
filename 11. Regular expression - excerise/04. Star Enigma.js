function enigma(array) {
    let number = Number(array.shift());
    let messages = [];
    let attacked = 0;
    let destroyed = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < array.length; i++) {
        let currentMessage = array[i];
        let letters = currentMessage.match(/[star]/gi)
        let countLetters = letters.length
        let arraymessage = currentMessage.split('')
        let asciiMessage = [];
        for (let j = 0; j < arraymessage.length; j++) {
            let ascii = (arraymessage[j].charCodeAt());
            let letter = String.fromCharCode(ascii - countLetters)
            asciiMessage.push(letter);

        }
        messages.push(asciiMessage.join(''))
    }

    let current = null;
    let pattern = /([^@\-\!:>]*)@(?<planetName>[A-Z][a-z]+)([^@\-\!:>]*):([^@\-\!:.>]*)(?<population>(?<!\d)\d+)([^@\-\!:.>]*)!([^@\-\!:.>]*)(?<attackType>[AD])([^@\-\!:.>]*)!([^@\-\!:.>]*)->([^@\-\!:.>]*)(?<soldierCount>(?<!\d)\d+)([^@\-\!:.>]*)/g
    while ((current = pattern.exec(messages)) !== null) {

        let planetName = current.groups.planetName;
        let population = current.groups.population;
        let attackType = current.groups.attackType;
        let soldierCount = current.groups.soldierCount;
        if (attackType === 'A') {
            attackedPlanets.push(planetName);
            attacked++;
        } else if (attackType === 'D') {
            destroyedPlanets.push(planetName);
            destroyed++;
        }

    }
    attackedPlanets = [attackedPlanets.join(' ')]
    attackedPl = attackedPlanets[0].split(' ')
    destroyedPlanets = [destroyedPlanets.join(' ')]
    destroyedPl = destroyedPlanets[0].split(' ')


    let sortedAttacked = attackedPl.sort((a, b) => a.localeCompare(b))

    let sortedDestroyed = destroyedPl.sort((a, b) => a.localeCompare(b))
   

    console.log(`Attacked planets: ${attacked}`);
    if(attacked>0){
    for (let planet of sortedAttacked) {
        console.log(`-> ${planet}`);
    }
    }
    console.log(`Destroyed planets: ${destroyed}`);
    if(destroyed>0){
    for (let planet of sortedDestroyed) {
        console.log(`-> ${planet}`);
    }
    }
}
enigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])
enigma(['3',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])