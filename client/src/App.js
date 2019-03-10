import React, { Component, Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
  Typography
} from '@material-ui/core';

import Header from './components/Header';

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
      <Fragment>
        <CssBaseline />
        <Header />

        <Typography variant='display1' align='center' gutterBottom>
          {this.state.greeting}
        </Typography>
      </Fragment>
    );
  }
}

export default App;
