const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/audiodb');

let songSchema = mongoose.Schema({
    name: String,
    time: String,
    artist: String,
    album: String
});

let songs = mongoose.model('songs', songSchema)
module.exports.songs = songs;