import React, { Component } from 'react'
import Concert from '../components/Concert'




export default class Concerts extends Component {

    state = {
        concerts: []
    }

    componentDidMount() {
        fetch('http://localhost:9292/concerts')
        .then(resp => resp.json())
        .then(data => this.setState({
            concerts: data
        }))
    }


    concertsToShow() {
        return this.state.concerts.map(concert => {
            return <Concert conData={concert} />
        })
    }




    render() {
        return (
            <div>
                {this.concertsToShow()}
            </div>
        )
    }
}