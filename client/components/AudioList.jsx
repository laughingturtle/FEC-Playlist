import React from 'react';
function AudioList (props){
    const audio = (

        <table>
            <tbody>
                {props.audio.map((file,key)=>
                <tr key = {key}>
                <td>{file.name}</td>
                <td>{file.time}</td>
                <td>{file.artiest}</td>
                <td>{file.album}</td>
                <td>{file.file_url}</td>
                <td>{file.playlist_name}</td>
                </tr>
                    )}
            </tbody>
        </table>
    )
    return(
        <div>
            {/* <button onClick={() => console.log('Jazz button clicked')}><img src="https://i.ibb.co/2Np9g4g/jazz.jpg" alt="Jazz"></img></button>
            <button onClick={() => console.log('Pop button clicked')}><img src="https://i.ibb.co/XXMjhLn/pop.jpg" alt="POP"></img></button>
            <button onClick={() => console.log('Rock button clicked')}><img src="https://i.ibb.co/23jKYxF/rock.jpg" alt="Rock"></img></button> */}
            {audio}
        </div>
    )
}
export default AudioList;
