function solve(num1, num2, num3) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let middle = null;

    if (num1 > max) max = num1; 
    if (num2 > max) max = num2;
    if (num3 > max) max = num3;
    if (num1 < min) min = num1;
    if (num2 < min) min = num2;
    if (num3 < min) min = num3;

    if(num1==max && num2==min ||num2==max && num1== min) middle = num3;
    if(num1==max && num3==min || num3==max && num1==min ) middle = num2;
    if(num2==max && num3==min || num3==max && num2==min) middle = num1;
 console.log(max);
 console.log(middle);
 console.log(min);
}
solve(0,0,3)