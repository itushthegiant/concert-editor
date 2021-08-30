import React, { Component } from 'react'
import AddConcert from '../components/AddConcert'


export default class EditConcert extends Component {

    state = {
        new_concerts: []
    }






    render() {
        return (
            <div className='add-concert'>
                <AddConcert />
            </div>
        )
    }
}
