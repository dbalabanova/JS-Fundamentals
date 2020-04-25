function travelTime(array) {
let destinations = {};

array
.forEach((line)=> {
let [country,town,price] = line.split(' > ');
price = Number(price);
if(!destinations.hasOwnProperty(country)) {
    if(!destinations.hasOwnProperty(town)) {
    destinations[country]= {};
        destinations[country][town] = price;
    }
} else {
    if(!destinations[country].hasOwnProperty(town)) {
        destinations[country][town]= price;
    } else {
        if(price < destinations[country][town])
        destinations[country][town] = price
    }
}
});
let sortedAlpha = Object.entries(destinations)
.sort((a,b)=>a[0].localeCompare(b[0]));
let arr = [...sortedAlpha];
arr.forEach((element)=>{
let[ name, objectCities] = element;
let arrayCities = Object.entries(objectCities);
if(arrayCities.length>1){
    arrayCities.sort((a,b)=> a[1]>b[1])
    let result = '';
    arrayCities.forEach((city)=>{
        result += `${city[0]} -> ${city[1]} `
    
    });
    console.log(`${name} -> ${result}`);

} else {
arrayCities.forEach((city)=>{
let result = `${name} -> ${city[0]} -> ${city[1]} `
    console.log(result);
    
})

}
})




}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )