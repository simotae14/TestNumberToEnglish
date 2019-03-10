import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    Typography,
    Paper,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    withStyles
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const styles = {
    root: {
        marginTop: 20,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        padding: 20,
        maxWidth: 500
    },
    form: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-evenly'
    }
};

class Form extends Component {
    render() {
        const {
            numberInDigits,
            handleChangeNumber,
            handleConvertNumber,
            handleDeleteLast,
            greeting,
            latest,
            classes
        } = this.props;
        return (
            <Paper className={classes.root}>
                <Typography variant='display1' align='center' gutterBottom>
                    {greeting}
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={handleConvertNumber}
                >
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
                        disabled={!numberInDigits}
                    >
                        Submit
                    </Button>
                </form>
                {
                    latest && (
                        <List>
                            {latest.slice(0, 10).map(({ id, numberInDigits, numberInWords }) =>
                                <ListItem key={id}>
                                    <ListItemText primary={`${numberInDigits} in english is ${numberInWords}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            color='primary'
                                            onClick={() => handleDeleteLast(id)}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                    )
                }
            </Paper>
        );
    }
}

Form.propTypes = {
    handleChangeNumber: PropTypes.func.isRequired,
    handleConvertNumber: PropTypes.func.isRequired,
    handleDeleteLast: PropTypes.func.isRequired,
    numberInDigits: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    latest: PropTypes.array.isRequired,
    classes: PropTypes.object
};

export default withStyles(styles)(Form);