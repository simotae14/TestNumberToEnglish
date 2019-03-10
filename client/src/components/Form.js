import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Typography,
    Paper,
    Button
} from '@material-ui/core';

class Form extends Component {
    render() {
        const {
            numberInDigits,
            handleChangeNumber,
            greeting
        } = this.props;
        return (
            <Paper>
                <Typography variant='display1' align='center' gutterBottom>
                    {greeting}
                </Typography>
                <form onSubmit={this.handleConvert}>
                    <TextField
                        name='numberInDigits'
                        label='Insert the number'
                        value={numberInDigits}
                        onChange={handleChangeNumber}
                        margin='normal'
                    />
                    <Button
                        type='submit'
                        color='primary'
                        variant='raised'
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        );
    }
}

Form.propTypes = {
    handleChangeNumber: PropTypes.func.isRequired,
    numberInDigits: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired
};

export default Form;