import React from 'react';
import {Table} from 'react-bootstrap';
import {Grid, Row, Col, Image} from 'react-bootstrap';
const creds = require('../../sqs/sqsConfig');

var Producer = require('sqs-producer');

var producer = Producer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/021058984666/song-queue',
  region: 'us-east-2',
  accessKeyId: creds.AWS_ACCESS_KEY_ID,
  secretAccessKey: creds.AWS_SECRET_ACCESS_KEY
});

const sendMessage = (songName, songUrl, songArtist) => {
    producer.send([{
        id: '1',
        body: JSON.stringify({songName: songName, songUrl:songUrl,  songArtist:songArtist})
      }], function(err) {
        if (err) console.log(err);
      });

}


function AudioList (props){
    const audio = (

        <Table striped condensed >
            <thead>
            <tr>
            <th>Song name</th>
            <th>Time </th>
            <th>Artist</th>
            <th>Album</th>
            </tr>
            </thead>
            <tbody>
                {props.audio.map((file,key)=>
                <tr key = {key}>
                <td >{file.name}</td>
                <td>{file.time}</td>
                <td>{file.artist}</td>
                <td>{file.album}</td>
                {/* <td>{file.file_url}</td>
                <td>{file.playlist_name}</td> */}
                <td><Image onClick={ () =>sendMessage(file.name, file.file_url, file.artist)}  style={{width: 23, height: 23}}  src="https://i.ibb.co/Y0kVjc0/play.png"  alt="20x20" circle /></td>
                </tr>
                    )}
            </tbody>
        </Table>
    )
    return(
        <div>
            {audio}
        </div>
    )
}
export default AudioList;