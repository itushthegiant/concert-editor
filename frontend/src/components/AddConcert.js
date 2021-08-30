import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: '25ch',
//     },
// }));
export default class AddConcert extends Component {

    state = {
        title: '',
        date: '',
        artist: '',
        venue: ''
    }


    handleOnChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    render() {

        return (
            <div>
                <TextField
                    name='title'
                    onChange={this.handleOnChange}
                    id="standard-full-width"
                    label="Concert Title"
                    style={{ margin: 8 }}
                    placeholder="Title"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    name='date'
                    id="standard-full-width"
                    label="Date"
                    style={{ margin: 8 }}
                    placeholder="YYYY-MM-DD"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    name='artist'
                    id="standard-full-width"
                    label="Artist Name"
                    style={{ margin: 8 }}
                    placeholder="Artist"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    name='venue'
                    id="standard-full-width"
                    label="Venue Name"
                    style={{ margin: 8 }}
                    placeholder="Venue"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" color="primary" component="span">
                    Submit
                </Button>
            </div>
        )
    }
}
