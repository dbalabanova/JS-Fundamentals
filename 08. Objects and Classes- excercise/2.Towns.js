function towns(array) {
    class Town {
        constructor(town, latitude,longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude=longitude;
        }
    }
    let cities=[];
for (let i = 0; i < array.length; i++) {
    let each = array[i].toString().split('|');
    
    let town = each[0].trim();
    let latitude = Number(each[1]).toFixed(2);
    let longitude = Number(each[2]).toFixed(2);
    let city = new Town (town,latitude,longitude);
    let json = JSON.stringify(city);
    let object = JSON.parse(json);
    console.log(object);
    

    
}

}
towns([ 'Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625' ])