// var audioList = (props) => (
//     <div className="audiolist">
//       { props.audio.map((audio, i) => {
//         return ({audio});
//       })}
//     </div>
//   );
import React from 'react';

function AudioList (props){
    const audio = (
        <ul>
            <h3>These are general songs</h3>
            {props.audio.map((file) =>
            <li key={file.time}>
                {file.name} {file.time} {file.artist} {file.album}
            </li>
                )}
        </ul>
    )
    return(
        <div>
            {audio}
        </div>
    )

}
export default AudioList;


// const AudioList = (props) => {
//     <div>
//         <h3>These are are general songs List:</h3>
//         <ul>
//             {props.audio.map((files) =>
//                 <li>
//                     {files.name}
//                 </li>
//                 )}
//         </ul>
//     </div>
// }
// export default AudioList;