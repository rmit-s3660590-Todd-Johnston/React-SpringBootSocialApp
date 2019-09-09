import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import 'antd/dist/antd.css';
import {Layout, Menu, Typography} from "antd";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChatScreen from "./screens/ChatScreen";


const {Title} = Typography;
const {Header, Content, Footer} = Layout;


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'Login',
            authenticated: true
        }
    }

    render() {
        return (
            <Router>
                <Layout style={{minHeight: "100vh"}}>
                    <Header>
                        <Menu
                            onClick={e => this.setState({current: e.key})}
                            selectedKeys={[this.state.current]}
                            mode={"horizontal"}
                            theme={"dark"}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item>
                                <Link to={'/login'}>Login</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={'/profile'}>Profile</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={'/chat'}>Chat</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route path="/" exact component={LoginScreen}/>
                        <Route path="/login" component={LoginScreen}/>
                        <Route path="/registration" component={RegistrationScreen}/>
                        <AuthenticatedRoute path="/profile" component={ProfileScreen}/>
                        <AuthenticatedRoute path="/chat" component={ChatScreen}/>
                    </Switch>
                    <Footer style={{textAlign: 'center'}}>Created by Todd, Jack, Sherry, and Tom | Doughnuts Taste Good™ </Footer>
                </Layout>
            </Router>
        )
    }
}
