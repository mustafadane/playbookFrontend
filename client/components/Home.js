import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <div>this is home</div>
                <Link to="/login" >LOGIN</Link>
            </div>
        )
    }
}

export default Home
