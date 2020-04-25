function pascal (input) {
    let output=input.split(/(?=[A-Z])/);
    console.log(output.join(', '));
    
}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')