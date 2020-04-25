function solve(num) {
    let last = num%10;

    if (last == 1) console.log("one");
    else if (last == 2) console.log("two");
    else if (last == 3) console.log("three");
    else if (last == 4) console.log("four");
    else if (last == 5) console.log("five");
    else if (last == 6) console.log("six");
    else if (last == 7) console.log("seven");
    else if (last == 8) console.log("eight");
    else if (last == 9) console.log("nine");
    else if (last == 0) console.log("zero");

    //console.log(last);
}
solve(234)