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
    numberInDigits: ''
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
          numberInDigits={this.state.numberInDigits}
        />
      </Fragment>
    );
  }
}

export default App;
