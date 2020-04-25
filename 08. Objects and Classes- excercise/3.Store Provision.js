function storeProvision(firstArray,secondArray) {
let products= {};

for (let i = 0; i < firstArray.length; i+=2) {
    let productName = firstArray[i];
    let productQuantity = Number(firstArray[i+1]);
    products[productName]=productQuantity
}

for (let j = 0; j < secondArray.length; j+=2) {
    let productName=secondArray[j];
    let productQuantity=Number(secondArray[j+1]);

    if(products.hasOwnProperty(productName)){
        products[productName]+=productQuantity;
    } else {
        products[productName]=productQuantity;
    }
    
}
for (const key in products) {
    console.log(`${key} -> ${products[key]}`);
}
}
storeProvision([ 'Chips',
'5',
'CocaCola',
'9',
'Bananas',
'14',
'Pasta',
'4',
'Beer',
'2' ] ,
[ 'Flour',
'44',
'Oil',
'12',
'Pasta',
'7',
'Tomatoes',
'70',
'Bananas',
'30' ])