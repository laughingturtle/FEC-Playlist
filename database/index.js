const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/audiodb');
let data = require('../sampleData/exampleAudioData.js')
let db = mongoose.connection;
console.log('this is data',data);

let songSchema = mongoose.Schema({
    name: String,
    time: String,
    artist: String,
    album: String,
    file_url: String,
    playlist_name: String
});


let songs = mongoose.model('songs', songSchema)
const savedb = () =>{
    songs.create(data)
    .then(() => db.close());
}
savedb();