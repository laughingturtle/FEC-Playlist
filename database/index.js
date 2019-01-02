const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/audiodb');

let repoSchema = mongoose.Schema({
    name: String,
    time: String,
    artist: String,
    album: String
});

let Repo = mongoose.model('Repo', repoSchema)
let save = (name,time,artist,album) => {
    let newRepo = new Repo({
        name:name,
        time:time,
        artist:artist,
        album:album
    })

    newRepo.save(function(err){
        if(err){console.log('there is an error to store in DB')}
        else {console.log('data store successfully in DB!!')}
    });
}
module.exports.save = save