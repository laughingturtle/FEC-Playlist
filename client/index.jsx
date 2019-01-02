import React from 'react';
import ReactDOM from 'react-dom';
import AudioList from './components/AudioList.jsx';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //audio: window.exampleAudioData
            audio: [
                {
                name:"Bee Moved",
                time: "0:40",
                artist: "Blue Monday FM",
                album: "Bee Moved!"
                },
                {
                name:"Bee Moved1",
                time: "0:41",
                artist: "Blue Monday FM1",
                album: "Bee Moved!1"
                },
                {
                name:"Bee Moved1",
                time: "0:42",
                artist: "Blue Monday FM1",
                album: "Bee Moved!1"
                }
            ]
        }
    }
    render(){
        console.log('this is state', this.state.audio);
        return(
            <div>
                <h1>Spotify's PlayList</h1>
            <div>

              <AudioList audio={this.state.audio}/>
            </div>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));