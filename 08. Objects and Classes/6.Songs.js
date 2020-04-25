function songs(array) {
    class Song {
        constructor (typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
let numberOfSongs = Number(array.shift());
let sth = array.map(line=>line.split('_'))
console.log(sth);


}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )