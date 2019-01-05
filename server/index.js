let express = require('express');
let app = express();
const port = process.env.PORT || 5000;
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/audiodb');
let db = mongoose.connection;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/songs', function(req,res){
    let collection = db.collection('songs')
    collection.find().toArray(function(err,results){
        if(err){
            console.log('Error returned while getting data');
        } else {
            res.send(results);
        }
    })
})
app.get('/filterSongsJazz', function(req, res){
    let collection = db.collection('songs')
    collection.find({playlist_name: 'Jazz'}).toArray(function(err,results){
        if(err){
            console.log('Error returned while getting data');
        } else {
            res.send(results);
        }
    })
})
app.get('/filterSongsRock', function(req, res){
    let collection = db.collection('songs')
    collection.find({playlist_name: 'Rock'}).toArray(function(err,results){
        if(err){
            console.log('Error returned while getting data');
        } else {
            res.send(results);
        }
    })
})
app.get('/filterSongsPop', function(req, res){
    let collection = db.collection('songs')
    collection.find({playlist_name: 'Pop'}).toArray(function(err,results){
        if(err){
            console.log('Error returned while getting data');
        } else {
            res.send(results);
        }
    })
})

app.listen(port, ()=> {
    console.log(`server is listening on http:\\\\localhost:${port}`);
});