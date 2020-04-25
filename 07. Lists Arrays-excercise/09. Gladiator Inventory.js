function gladiator(array) {
    let allThings = array.toString().split(',');
    let inventory = allThings[0].toString().split(' ');

    for (let i = 1; i < allThings.length; i++) {
        let current = allThings[i].toString().split(' ');
        let command = current[0];
        let element = current[1];

        if (command === 'Buy') {
            let exist = inventory.indexOf(element);
            if (exist === -1) {
                inventory.push(element);
            }
        } else if (command === 'Trash') {
            let index = inventory.indexOf(element);
            if (index != -1) {
                inventory.splice(index, 1);
            }
        } else if (command === 'Repair') {
            let exist = inventory.indexOf(element);
            if (exist != -1) {
                inventory.splice(exist, 1);
                inventory.push(element);
            }
        } else if (command === 'Upgrade') {
            let upgrade = current[1].toString().split('-');
            let put = `${upgrade[0]}:${upgrade[1]}`
            let exist = inventory.indexOf(upgrade[0]);
            if(exist!=-1) {
                inventory.splice(exist+1,0,put)
            }            
        }

    }
    console.log(inventory.join(' '));

}
gladiator(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)