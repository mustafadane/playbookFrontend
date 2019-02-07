import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, Home } from './components'


export class App extends Component {
    render() {
        return (
            <div>
                <div>REACT IS WORKING</div>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        )
    }
}

export default App

