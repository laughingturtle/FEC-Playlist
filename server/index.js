let express = require('express');
let app = express();
const port = process.env.PORT || 3000;
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let savedb = require('../database/index.js');
mongoose.connect('mongodb://localhost/audiodb');
let db = mongoose.connection;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.post('/audiolist', function(req,res){
    //console.log('this is req body', req.body)
    for(let i=0;i<req.body.length;i++){
        //console.log('this is each req body', req.body[i])
        savedb.save(req.body[i].name, req.body[i].time, req.body[i].artist, req.body[i].album);
    }
    res.sendStatus(201);
})

app.listen(port, ()=> {
    console.log(`server is listening on http:\\\\localhost:${port}`);
});