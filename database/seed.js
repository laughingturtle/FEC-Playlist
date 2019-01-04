const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/audiodbtest');
//const songs = require('./index.js')
let db = mongoose.connection;
const faker = require('faker');

let songSchema = mongoose.Schema({
    name: String,
    time: String,
    artist: String,
    album: String,
    file_url: String

});
let songs = mongoose.model('songs', songSchema)
let songsCreate = () => {
    let songsList = []
    for(let i=0;i<50;i++){
        const songEntry  = {
            name: faker.name.findName(),
            time: Math.floor(Math.random() * 10)+ 'min',
            artist: faker.name.findName(),
            album: faker.random.words(),
            file_url: faker.internet.url()
        }
        songsList.push(songEntry)
    }
    return songsList;
}

const savedb = () =>{
    songs.create(songsCreate())
    .then(() => db.close());
}
savedb();