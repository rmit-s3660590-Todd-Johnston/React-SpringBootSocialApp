import React, {Component} from "react";
import {Link, Route, Router, Switch,} from 'react-router-dom'
import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import 'antd/dist/antd.css';
import {Layout, Menu, Typography} from "antd";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChatScreen from "./screens/ChatScreen";
import GroupStudyScreen from "./screens/GroupStudyScreen";
import SearchScreen from "./screens/SearchScreen";
import Wall from "./containers/Wall";
import GroupStudyListScreen from "./screens/GroupStudyListScreen";
import {createBrowserHistory} from 'history'


const ourHistory = createBrowserHistory();

const {Title} = Typography;
const {Header, Content, Footer} = Layout;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 'login',
            authenticated: true
        }
    }

    componentDidMount() {
        ourHistory.listen((location, action) => {
            // location is an object like window.location
            this.setState({
                current: location.pathname
            });
            console.log(action, location.pathname, location.state);
        })
    }

    //TODO - search bar in header

    render() {
        console.info(ourHistory.location.pathname);

        return (
            <Router
                history={ourHistory}
            >
                <Layout style={{minHeight: "100vh"}}>
                    <Header>
                        <Menu
                            onClick={e => this.setState({current: e.key})}
                            selectedKeys={[ourHistory.location.pathname]}
                            mode={"horizontal"}
                            theme={"dark"}
                            style={{lineHeight: '64px'}}
                            inlineCollapsed={false}
                        >
                            <Menu.Item key='/login'>
                                <Link to={'/login'}>Login</Link>
                            </Menu.Item>
                            <Menu.Item key='/profile'>
                                <Link to={'/profile'}>Profile</Link>
                            </Menu.Item>
                            <Menu.Item key='/chat'>
                                <Link to={'/chat'}>Chat</Link>
                            </Menu.Item>
                            <Menu.Item key='/wall'>
                                <Link to={'/wall'}>Wall</Link>
                            </Menu.Item>
                            <Menu.Item key='/study'>
                                <Link to={'/study'}>Group Study</Link>
                            </Menu.Item>
                            <Menu.Item key='/search'>
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
                        <AuthenticatedRoute path="/study" component={GroupStudyListScreen}/>
                        <AuthenticatedRoute path="/search" component={SearchScreen}/>
                        <AuthenticatedRoute path="/study-group" component={GroupStudyScreen}/>
                        <AuthenticatedRoute path="/wall" component={Wall}/>
                    </Switch>
                    <Footer style={{textAlign: 'center'}}>Created by Todd, Jack, Sherry, and Tom | Doughnuts Taste Good™ </Footer>
                </Layout>
            </Router>
        )
    }
}
