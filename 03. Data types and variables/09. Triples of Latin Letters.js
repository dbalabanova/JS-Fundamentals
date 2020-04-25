function latin(n) {
    for (let i = 0; i < (n); i++) {
        for (let j = 0; j < (n); j++) {
            for (let k = 0; k < (n); k++) {
                let char = String.fromCharCode(i+97);
                let secondChar = String.fromCharCode(j+97);
                let thirdChar = String.fromCharCode(k+97);
                console.log(char + secondChar + thirdChar);
            }

        }

    }
}
latin(3)