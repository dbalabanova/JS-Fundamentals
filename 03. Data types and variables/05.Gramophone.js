function gramophone(band,album,song) {
let bandSec = band.length;
let albumSec = album.length;
let songSec = song.length;
let allSec = albumSec*bandSec*(songSec/2)
let rotations = Math.ceil(allSec/2.5)
console.log(`The plate was rotated ${rotations} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')