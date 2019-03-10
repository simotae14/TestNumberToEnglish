import React, { Component, Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
  Typography
} from '@material-ui/core';

import Header from './components/Header';
import Form from './components/Form';

import './App.css';

class App extends Component {
  // state of the component
  state = {
    greeting: '',
    latest: [],
    numberInDigits: '',
    numberInWords: ''
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
  handleConvertNumber = async e => {
    e.preventDefault();
    const response = await fetch('/api/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numberInDigits: this.state.numberInDigits })
    });
    const responseData = await response.json();
    this.setState(({ numberInDigits, latest }) => ({
      latest: [
        ...latest,
        {
          numberInDigits,
          numberInWords: responseData.numberInWords,
          id: Date.now()
        }
      ],
      numberInDigits: '',
      numberInWords: responseData.numberInWords
    }));
  }
  handleChangeNumber = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Form
          greeting={this.state.greeting}
          handleChangeNumber={this.handleChangeNumber}
          handleConvertNumber={this.handleConvertNumber}
          numberInDigits={this.state.numberInDigits}
        />
      </Fragment>
    );
  }
}

export default App;
