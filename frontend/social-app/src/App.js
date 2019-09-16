import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from "./containers/AuthenticatedRoute";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import 'antd/dist/antd.css';
import {Layout, Menu, Typography} from "antd";
import RegistrationScreen from "./screens/RegistrationScreen";
import Search from "./components/Search";

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
                <Layout style={{height: window.innerHeight}}>
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
                        </Menu>
                    </Header>
                    <Content style={{padding: '0 50px', marginTop: 64, flex: 1}}>
                        <Switch>
                            <Route path="/" exact component={LoginScreen}/>
                            <Route path="/login" component={LoginScreen}/>
                            <Route path="/registration" component={RegistrationScreen}/>
                            <AuthenticatedRoute path="/profile" component={ProfileScreen}/>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Created by Todd, Jack, Sherry, and Tom | Doughnuts Taste Good™ </Footer>
                </Layout>
            </Router>
        )
    }
}
