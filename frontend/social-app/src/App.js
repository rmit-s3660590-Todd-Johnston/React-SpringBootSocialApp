import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import 'antd/dist/antd.css';
import {Input, Layout, Menu, Typography} from "antd";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChatScreen from "./screens/ChatScreen";
import GroupStudyScreen from "./screens/GroupStudyScreen";
import SearchScreen from "./screens/SearchScreen";
import Wall from "./containers/Wall";


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

    //TODO - search bar in header

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
                            inlineCollapsed={false}
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
                            <Menu.Item>
                                <Link to={'/wall'}>Wall</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={'/group-study'}>Group Study</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={'/search'}>Search</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Switch>
                        <Route path="/" exact component={LoginScreen}/>
                        <Route path="/login" component={LoginScreen}/>
                        <Route path="/registration" component={RegistrationScreen}/>
                        <AuthenticatedRoute path="/profile" component={ProfileScreen}/>
                        <AuthenticatedRoute path="/chat" component={ChatScreen}/>
                        <AuthenticatedRoute path="/study" component={GroupStudyScreen}/>
                        <AuthenticatedRoute path="/search" component={SearchScreen}/>
                        <AuthenticatedRoute path="/group-study" component={GroupStudyScreen}/>
                        <AuthenticatedRoute path="/wall" component={Wall}/>
                    </Switch>
                    <Footer style={{textAlign: 'center'}}>Created by Todd, Jack, Sherry, and Tom | Doughnuts Taste Good™ </Footer>
                </Layout>
            </Router>
        )
    }
}
