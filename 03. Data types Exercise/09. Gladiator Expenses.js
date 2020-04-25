function gladiator(lostFight, helmet, sword, shield, armour) {
    let countHelmet = 0;
    let countSword = 0;
    let countShield = 0;
    let money = 0;
    for (let i = 1; i <= lostFight; i++) {
        countHelmet++;
        countSword++;
        if (countHelmet === 2 && countSword === 3) {
            money += shield;
            countShield++;
        }
        if (countHelmet === 2) {
            money += helmet;
            countHelmet = 0;
        }
        if (countSword === 3) {
            money += sword;
            countSword = 0;
        }
        if (countShield === 2) {
            money += armour;
            countShield = 0;
        }

    }
    console.log(`Gladiator expenses: ${money.toFixed(2)} aureus`);

}
gladiator(23,
    12.50,
    21.50,
    40,
    200

)