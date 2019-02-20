import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

export class NewPlaybook extends Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }
    render() {
        return (
            <div>
                <TextField
                    required
                    id='name'
                    name='name'
                    label="Task's Name"
                    fullWidth
                />
                <TextField
                    required
                    id='week'
                    name='week'
                    label="Week Number (-4, 6)"
                    fullWidth
                />
                <TextField
                    required
                    id='day'
                    name='day'
                    label="Day Number (1, 7)"
                    fullWidth
                />
                <TextField
                    id='notes'
                    name='notes'
                    label="Notes"
                    fullWidth
                    multiline
                />

            </div>
        )
    }
}

export default NewPlaybook
