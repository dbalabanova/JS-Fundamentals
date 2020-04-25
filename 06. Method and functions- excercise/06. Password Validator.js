function password(password) {

    let symbols = "*|,\".:<>[]{}`\';()@&$#%";
    let digits = "0987654321";
    //let lettersandDigits;
    //let twoDigits;
    let twodig = 0;
    let letters = 0;
    for (let k = 0; k < password.length; k++) {
        let current = password.charAt(k);
        for (let i = 0; i < symbols.length; i++) {
           let  lettersandDigits = current.indexOf(symbols.charAt(i));
            if (lettersandDigits != -1) {
                letters++;
            }
                       
        }
        for (let j = 0; j < digits.length; j++) {
            let twoDigits = current.indexOf(digits.charAt(j));
            if (twoDigits != -1) {
                twodig++;
            }
        }
        
    }
    

    if (letters != 0) console.log("Password must consist only of letters and digits");
    if (password.length < 6 || password.length > 10)
        console.log("Password must be between 6 and 10 characters");
    if (twodig < 2) console.log("Password must have at least 2 digits");
    //console.log(password);

    if (letters === 0 && twodig >= 2 && password.length>=6 && password.length<=10) {
        console.log('Password is valid');
        
    }

}
//password('logIn');
//password('MyPass123');
password('..');