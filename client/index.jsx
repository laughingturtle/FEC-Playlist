import React from 'react';
import ReactDOM from 'react-dom';
import AudioList from './components/AudioList.jsx';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            audio: [],
            playlist_name: ''
        }
        this.getSongs = this.getSongs.bind(this)
        this.filteredSongsJazz = this.filteredSongsJazz.bind(this)
        this.filteredSongsPop = this.filteredSongsPop.bind(this)
        this.filteredSongsRock = this.filteredSongsRock.bind(this)

    }
    getSongs(){
        fetch('http://localhost:5000/songs')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    audio:result
                })
            },
            (error) =>{
                console.log('something went wrong!!')
            }
        )
    }
    filteredSongsJazz(){
        fetch('http://localhost:5000/filterSongsJazz')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    audio:result
                })
            },
            (error) =>{
                console.log('something went wrong!!')
            }
        )

    }
    filteredSongsPop(){
        fetch('http://localhost:5000/filterSongsPop')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    audio:result
                })
            },
            (error) =>{
                console.log('something went wrong!!')
            }
        )

    }
    filteredSongsRock(){
        fetch('http://localhost:5000/filterSongsRock')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    audio:result
                })
            },
            (error) =>{
                console.log('something went wrong!!')
            }
        )

    }
    componentDidMount(){
        this.getSongs();
    }

    render(){
        return(
            <div>
                <h2>Spotify's Library</h2>
                <button onClick={this.getSongs}>Home</button>

            <div>
                <button onClick={this.filteredSongsJazz}><img src="https://i.ibb.co/2Np9g4g/jazz.jpg" alt="Jazz"></img></button>
                <button onClick={this.filteredSongsPop}><img src="https://i.ibb.co/XXMjhLn/pop.jpg" alt="POP"></img></button>
                <button onClick={this.filteredSongsRock}><img src="https://i.ibb.co/23jKYxF/rock.jpg" alt="Rock"></img></button>
                <AudioList audio={this.state.audio}/>
            </div>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));