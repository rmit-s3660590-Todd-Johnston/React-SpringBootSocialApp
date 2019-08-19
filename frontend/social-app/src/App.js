import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default class App extends Component {
    render() {
        return (
            <Router>
                {/* ADD HEADER STUFF HERE */}
                <Switch>
                    <Route path="/" exact component={LoginScreen}/>
                    <Route path="/login" component={LoginScreen}/>
                    <AuthenticatedRoute path="/profile" component={ProfileScreen}/>
                </Switch>
                {/* ADD FOOTER STUFF HERE */}
            </Router>
        )
    }
}