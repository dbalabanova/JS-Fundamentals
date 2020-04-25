function solve(people,type,day) {
    let sum = 0;
if(type=="Students"){
    if(day=="Friday"){
        sum = people*8.45;
    }
    else if(day=="Saturday"){
        sum = people*9.80;
    }
    else if(day=="Sunday"){
        sum = people*10.46;
    }
    if(people>=30) sum=sum*0.85;
}

if(type=="Business"){
    if(day=="Friday"){
        sum = people*10.90;
        sumReduce=(people-10)*10.90;
   }
    else if(day=="Saturday"){
        sum = people*15.60;
        sumReduce=(people-10)*15.60;
    }
    else if(day=="Sunday"){
        sum = people*16.00;
        sumReduce=(people-10)*16.00;
    }
    if(people>=100) sum=sumReduce;
}

if(type=="Regular"){
    if(day=="Friday"){
        sum = people*15.00;
    }
    else if(day=="Saturday"){
        sum = people*20.00;
    }
    else if(day=="Sunday"){
        sum = people*22.50;
    }
    if(people>=10&&people<=20) sum=sum*0.95;
}
console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30,
    "Students",
    "Sunday"
    )