import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ArtistsSuggestion from '../components/ArtistsSuggestions';
import VenueSuggestions from '../components/VenueSuggestions';
import AddDate from '../components/AddDate';
import AddTitle from '../components/AddTitle';



export default class AddConcert extends Component {

    state = {
        title: '',
        date: '',
        artist: '',
        venue: ''
    }



    handleOnSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:9292/concerts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                date: this.state.date,
                artist: this.state.artist,
                venue: this.state.venue
            })
        })
        .then(resp => resp.json())
        .then(this.props.history.push("/"))
    }



    getValueFromSuggestion = (key, value) => {
        this.setState({
            [key]: value
        })
    }



    render() {

        return (
            <div className="add-concert">
                <form onSubmit={this.handleOnSubmit}>
                    <AddTitle getValueFromSuggestion={this.getValueFromSuggestion} />
                    <AddDate getValueFromSuggestion={this.getValueFromSuggestion}/>
                    <VenueSuggestions getValueFromSuggestion={this.getValueFromSuggestion}/>
                    <ArtistsSuggestion getValueFromSuggestion={this.getValueFromSuggestion} />
                    <Button className="add-concert-button" variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}
