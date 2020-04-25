function party(array) {
    let guests = [];

    for (let i = 0; i < array.length; i++) {
        let separate = array[i].toString().split(' ');
        let name = separate[0];
        if (array[i].includes('not')) {
            let exists = guests.indexOf(name);
            if (exists === -1) {
                console.log(`${name} is not in the list!`);
            } else {
                guests.splice(exists, 1)
            }
        } else {
            let inTheList = guests.indexOf(name);
            if (inTheList === -1) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);

            }
        }

    }
    console.log(guests.join('\n'));
    
}
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)