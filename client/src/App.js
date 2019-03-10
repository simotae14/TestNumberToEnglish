import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // state of the component
  state = {
    greeting: ''
  }
  componentDidMount() {
    this.callApiGreeting()
      .then(res => this.setState({ greeting: res.greeting }))
      .catch(err => console.log(err));
  }
  callApiGreeting = async () => {
    const response = await fetch('api/greeting');
    const body = await response.json();
    // check error
    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>
          {this.state.greeting}
        </p>
      </div>
    );
  }
}

export default App;
