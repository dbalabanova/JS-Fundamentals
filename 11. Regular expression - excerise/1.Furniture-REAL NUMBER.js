// function furniture(array) {
// let objects=[];
// let pattern =/>>(?<name>\w+)<<(?<price>\d+([.]\d+)?)!(?<quantity>\d+)/b/g
// let current =null;
// let totalprice = 0;
// while(current=pattern.exec(array)!==null){
//     let name = current.groups.name;
//    let price = current.groups['price'];
//     let quantity = current.groups['quantity'];
//     totalprice+=(price*quantity);
//     objects.push(name)
// }
// console.log(`Bought furniture:`)
// for (let o of obj) {
// console.log(o);
// }
// }
function furniture(array) {
    //let last = array.pop();
    let obj = [];
    let totalPrice = 0;
    let current = null;
let pattern =/>>(?<name>\w+)<<(?<price>\d+([.]\d+)?)!(?<quantity>\d+)\b/g
while((current = pattern.exec(array))!==null){
    let name = current.groups.name;
    let price = current.groups.price;
    let quantity = current.groups.quantity;
    obj.push(name)
    totalPrice+=(price*quantity)
    
}
console.log(`Bought furniture:`)
for (let o of obj) {
console.log(o);
}
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])