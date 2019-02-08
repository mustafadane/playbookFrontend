import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login, Home } from './components'


export class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/home' component={Home} />
                    <Route component={Login} />
                </Switch>
            </div>
        )
    }
}

export default App

