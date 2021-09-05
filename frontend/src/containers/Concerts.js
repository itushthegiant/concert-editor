import React, { Component } from 'react'
import Concert from '../components/Concert'
import Grid from '@material-ui/core/Grid';





export default class Concerts extends Component {

    state = {
        concerts: [],
    }



    componentDidMount() {
        fetch('http://localhost:9292/concerts')
            .then(resp => resp.json())
            .then(data => this.setState({
                concerts: data
            }))

    }



    componentDidUpdate() {
        fetch('http://localhost:9292/concerts')
            .then(resp => resp.json())
            .then(data => {
                if (data.length === this.state.concerts.length)
                    console.log(data.length)
                else
                    this.setState({
                        concerts: data
                    })
            })
    }




    handleClick = (event) => {
        fetch(`http://localhost:9292/concerts/${event.target.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => this.setState({
                concerts: [...this.state.concerts], data
            }))
    }




    concertsToShow() {
        return this.state.concerts.map(concert => {
            return <Concert key={concert.id} conData={concert} handleClick={this.handleClick} />
        })
    }




    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {this.concertsToShow()}
                </Grid>
            </div>
        )
    }
}
