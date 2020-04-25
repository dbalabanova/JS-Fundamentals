function tseam(array) {
    let account = array[0];
    let gamesAccount = account.split(' ');
    for (let i = 1; i < array.length; i++) {
        let command = array[i];
        if (command === 'Play!') break;
        else {
            let current = command.split(' ');
            let currentCommand = current[0];
            let game = current[1];
            if (currentCommand === 'Install') {
                let gameInst = gamesAccount.indexOf(game);
                if(gameInst===-1)

                gamesAccount.push(game);
            }
            if (currentCommand === 'Uninstall') {
                let gameExist = gamesAccount.indexOf(game);
                if (gameExist != -1) {
                    gamesAccount.splice(gameExist, 1)
                }
            }
            if (currentCommand === 'Expansion') {
                let expan = game.split('-')
                let gameExpand = gamesAccount.indexOf(expan[0]);
                if (gameExpand != -1) {
                    gamesAccount.splice((gameExpand + 1), 0, `${expan[0]}:${expan[1]}`)
                }
            }

            if (currentCommand === 'Update') {
                let updateGame = gamesAccount.indexOf(game);
                if (updateGame != -1) {
                    gamesAccount.splice(updateGame, 1);
                    gamesAccount.push(game);
                }
            }
        }

    }
    console.log(gamesAccount.join(' '));

}
tseam(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)

tseam(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)