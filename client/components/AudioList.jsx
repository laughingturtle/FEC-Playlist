import React from 'react';
import {Table} from 'react-bootstrap';
import {Grid, Row, Col, Image} from 'react-bootstrap';


function AudioList (props){
    const audio = (

        <Table striped condensed hover>
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
                <td><Image onClick={ () =>console.log(` ${file.name} song have clicked`)}  style={{width: 23, height: 23}}  src="https://i.ibb.co/Y0kVjc0/play.png"  alt="20x20" circle /></td>
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