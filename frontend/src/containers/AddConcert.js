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


    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
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
        .then(this.props.history.push("/concerts"))

    }

    getValueFromSuggestion = (value) => {
        this.setState({
            artist: value
        })
    }

    getValueFromVenue = (value) => {
        this.setState({
            venue: value
        })
    }

    getValueFromDate = (value) => {
        this.setState({
            date: value
        })
    }

    getValueFromTitle = (value) => {
        this.setState({
            title: value
        })
    }



    render() {

        return (
            <div className="add-concert">
                <form onSubmit={this.handleOnSubmit}>
                    <AddTitle getValueFromTitle={this.getValueFromTitle} />
                    <AddDate getValueFromDate={this.getValueFromDate}/>
                    <VenueSuggestions getValueFromVenue={this.getValueFromVenue}/>
                    <ArtistsSuggestion getValueFromSuggestion={this.getValueFromSuggestion} />
                    <Button className="add-concert" variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}
