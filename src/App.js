import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false
    };
  }

  render() {
    return (
      <div id="game">
        <button 
          id = "start"
          onClick = {() => this.setState({gameStarted : true})}
        >
          Start game
        </button>
        <h1>
          {String(this.state.gameStarted)}
        </h1>
      </div>
    );
  }
}

export default App;
