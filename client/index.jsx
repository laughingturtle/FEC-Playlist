import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import AudioList from './components/AudioList.jsx';


const Button1 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: palevioletred;

`;
const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  margin: 0.25em;
  padding: 0.25em 1em;

`;

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
        fetch('/songs')
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
        fetch('/filterSongsJazz')
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
        fetch('/filterSongsPop')
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
        fetch('/filterSongsRock')
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
                <Wrapper><Title>Songs Library</Title></Wrapper>
                <Button1 onClick={this.getSongs}>Home</Button1>

            <div>
                <Grid>
                    <Row>
                        <Col xs={3} md={2}>
                        <Image  style={{width: 200, height: 200}} onClick={this.filteredSongsJazz} src="https://i.ibb.co/M1kn0Yt/hiphop.png"  alt="171x180" thumbnail />
                        </Col>
                        <Col xs={3} md={2}>
                        <Image  style={{width: 200, height: 200}} onClick={this.filteredSongsJazz} src="https://i.ibb.co/JmtzL59/country.jpg"  alt="171x180" thumbnail />
                        </Col>
                        <Col xs={3} md={2}>
                        <Image  style={{width: 200, height: 200}} onClick={this.filteredSongsJazz} src="https://i.ibb.co/r3h1vrp/classical.jpg"  alt="171x180" thumbnail />
                        </Col>
                        <Col xs={3} md={2}>
                        <Image  style={{width: 200, height: 200}} onClick={this.filteredSongsJazz} src="https://i.ibb.co/2Np9g4g/jazz.jpg"  alt="171x180" thumbnail />
                        </Col>
                        <Col xs={3} md={2}>
                        <Image  style={{width: 200, height: 200}} onClick={this.filteredSongsPop} src="https://i.ibb.co/XXMjhLn/pop.jpg" alt="171x180" thumbnail />
                        </Col>
                        <Col xs={3} md={2}>
                        <Image style={{width: 200, height: 200}} onClick={this.filteredSongsRock} src="https://i.ibb.co/23jKYxF/rock.jpg"  alt="171x180" thumbnail />
                        </Col>
                    </Row>
                </Grid>
                <br></br>
                <AudioList audio={this.state.audio}/>
            </div>

            </div>
        );
    }
}
 module.exports = App;
// ReactDOM.render(<App />, document.getElementById('app'));