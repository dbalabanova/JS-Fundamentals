function dungeonestDark(input) {
    let string = input.toString();
    let array = string.split('|');
    let currentRoom = '';
    let startPoints = 100;
    let startCoins = 0;
    let currentPoints = 0;
    let currentCoins = 0;
    let currentMonster = '';
    let room = 0;
    let heal = 0;

    for (let i = 0; i < array.length; i++) {
        room++;
        currentRoom = array[i].split(' ');
        if(room===1)currentPoints = startPoints;

        if (currentRoom[0] === 'potion') {
            if(Number(currentRoom[1])+currentPoints>100) heal = 100-currentPoints;
            else heal = currentRoom[1];

            currentPoints += Number(currentRoom[1]);

            if (currentPoints > 100) {
                
                currentPoints = 100;
            }
            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${currentPoints} hp.`);
        }

        else if (currentRoom[0] === 'chest') {
            currentCoins += Number(currentRoom[1]);
            console.log(`You found ${currentRoom[1]} coins.`);
        }

        else {
            currentMonster = currentRoom[0];
            currentPoints -= Number(currentRoom[1]);
            if (currentPoints <= 0) {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${room}`);
                break;
            }

            else if (currentPoints > 0) {
                console.log(`You slayed ${currentMonster}.`);

            }
        }
        if(room===array.length) {
            console.log(`You've made it!`);
            console.log(`Coins: ${currentCoins}`)
            console.log(`Health: ${currentPoints}`)
            break;
        }
    }

}
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])