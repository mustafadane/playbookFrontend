import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <div>
                <div>this is login</div>
                <Link to="/">HOME</Link>
            </div>
        )
    }
}

export default Login
