import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import * as Routes from './pages';


class Main extends Component {

    render() {
        return (
            <>
                <ul>
                    <li><Link to='login'>Login</Link></li>
                    <li><Link to='signup'>signup</Link></li>
                    <li><Link to=''>Home</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/login" component={Routes.Login} />
                    <Route exact path="/signup" component={Routes.Signup} />
                    <Route exact path="/" component={Routes.Home} />
                    <Route component={Routes.NotFound} />
                </Switch>
            </>
        );
    }
}

export default Main;