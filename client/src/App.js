import React, { Component, Fragment } from 'react';
import {
  CssBaseline,
  Snackbar
//  withStyles
} from '@material-ui/core';

import Header from './components/Header';
import Form from './components/Form';
import MySnackbarContentWrapper from './components/MySnackbarContentWrapper';

import './App.css';

class App extends Component {
  // state of the component
  state = {
    greeting: '',
    latest: [],
    numberInDigits: '',
    numberInWords: '',
    errorMessage: '',
    openSnackbar: false
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
    try {
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numberInDigits: this.state.numberInDigits })
      });
      if (!response.ok) {
        response.clone().json().then((result) => {
          console.log(result);
          if (result.msg) {
            this.setState({
              numberInDigits: '',
              errorMessage: `${this.state.numberInDigits}: ${result.msg}`
            });
            this.handleOpenSnackbar();
          }
        });
      } else {
        const responseData = await response.json();
        this.setState(({ numberInDigits, latest }) => ({
          latest: [
            {
              numberInDigits,
              numberInWords: responseData.numberInWords,
              id: Date.now()
            },
            ...latest
          ],
          numberInDigits: '',
          numberInWords: responseData.numberInWords
        }));
      }
    } catch(e) {
      console.log(e);
      this.setState({
        numberInDigits: '',
        errorMessage: e.message
      });
      this.handleOpenSnackbar();
    }
  }
  handleChangeNumber = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  }
  handleOpenSnackbar = () => {
    this.setState({ openSnackbar: true });
  }
  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openSnackbar: false });
  };
  handleDeleteLast = (id) => {
    this.setState(({ latest }) => ({
      latest: latest.filter(item => item.id !== id)
    }));
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
          handleDeleteLast={this.handleDeleteLast}
          numberInDigits={this.state.numberInDigits}
          latest={this.state.latest}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSnackbar}
          autoHideDuration={3000}
          onClose={this.handleCloseSnackbar}
        >
          <MySnackbarContentWrapper
            variant="error"
            message={this.state.errorMessage}
            handleCloseSnackbar={this.handleCloseSnackbar}
          />
        </Snackbar>
      </Fragment>
    );
  }
}

export default App;
