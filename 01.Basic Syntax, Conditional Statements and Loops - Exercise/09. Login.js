function solve(input) {
    let user = input.shift();
    let password = "";
    let incorrect = 0;
    for (let i = (user.length - 1); i >= 0; i--) {
        let a = user.charCodeAt(i);
        let passwordletter = String.fromCharCode(a);
        password += passwordletter + "";
    }
    while (incorrect <= 4) {
        thePassword = input.shift();
        if (thePassword == password) {
            console.log(`User ${user} logged in.`);
            return;
        } else {
            incorrect++;
            if (incorrect == 4) {
                console.log(`User ${user} blocked!`);
                return;
            }
            console.log("Incorrect password. Try again.");

        }
    }

}
solve(["deni", "ivo", "joro", "ined"])