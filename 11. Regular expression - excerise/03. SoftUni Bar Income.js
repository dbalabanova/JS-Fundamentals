function barIncome(array) {
let pattern= /%(?<name>[A-Z][a-z]+)%[^\$\|%.]*<(?<product>\w+)>[^\$\|%.]*\|(?<count>\d+)\|[^\$\|%.]*(?<price>(?<!\d)\d{1,}[.]?\d*)\$/g
let list = [];
let current=null;
let totalPrice=0;
while((current=pattern.exec(array))!==null){
    let name = current.groups.name;
    let product = current.groups.product;
    let count = current.groups.count
    let price = Number(current.groups.price);
    let productTotalPrice = count*price
    totalPrice+=productTotalPrice;
    console.log(`${name}: ${product} - ${productTotalPrice.toFixed(2)}`);
}
console.log(`Total income: ${totalPrice.toFixed(2)}`);

}
barIncome([ '%George%rfgffds<Croissant>fef435|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift' ])
barIncome([ '%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift' ])