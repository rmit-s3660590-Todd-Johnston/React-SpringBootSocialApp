import React, {Component} from 'react';
import axios from 'axios'
import {Avatar, Descriptions, Divider, Tooltip, Button, List, Card, Badge, Icon, Typography} from "antd";
import {Layout} from "antd";
import AuthenticationService from "../AuthenticationService";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    backgroundColor: 'lightgray',
};

export default class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: 'Temp Name',
            firstName: 'First',
            lastName: 'Last',
            profilePic: "https://short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg-300x300.jpg"
        };

    }
    getLoggedInUserData = () => {
            this.setState({userName: AuthenticationService.getLoggedInUserName()});
            // this.setState({firstName: });
            // this.setState({lastName: });

    };


    componentWillMount() {
        this.getLoggedInUserData();
        if (this.state.firstName === "First"){
            this.setState({userName: "Name"});
            this.setState({lastName: "Error"});
        }
    }

    render() {
        return <Layout.Content style={{backgroundColor: "#FFFFFF", margin: 13, padding: 13}}>
            <Typography.Title>Profile</Typography.Title>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <a href={"#"}>
                    <Badge count={<Icon style={{marginBottom: '10px', color: 'gray'}} type={"edit"}/>}>
                        <Tooltip placement="right" title={"Hey! Don't touch my face human"}>
                            <Avatar src={this.state.profilePic}
                                    size={128} icon="user"/>
                        </Tooltip>
                    </Badge>
                </a>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <h1>{this.state.firstName + " " + this.state.lastName}</h1>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{marginRight: 60}} size={'large'}
                    onClick={() => {this.props.history.push('/wall')}}
                >
                    Go To Wall
                </Button>
                <Button style={{marginRight: 60}} type='primary' size={'large'}
                    onClick={() => this.props.history.push('/chat')}
                >
                    Message Me
                </Button>
                <Button style={{marginRight: 60}} type='primary' size={'large'}
                    onClick={() => this.props.history.push('/study-group')}
                >
                    Add to study group
                </Button>
                <Button size={'large'}>Add Friend?</Button>
            </div>

            <Divider style={{color: 'black', font: 'bold', marginTop: '30px'}}>About Me</Divider>
            <Descriptions>
                <Descriptions.Item label="Name">Mark</Descriptions.Item>
                <Descriptions.Item label="Telephone">9876543234</Descriptions.Item>
                <Descriptions.Item label="City">Cali</Descriptions.Item>
                <Descriptions.Item label="Address"> Planet Earth
                </Descriptions.Item>
            </Descriptions>

            <Divider style={{color: 'black', font: 'bold', marginTop: '30px'}}>My Skills</Divider>
            <Card.Grid style={gridStyle}>Business Man</Card.Grid>
            <Card.Grid style={gridStyle}>Decision Maker</Card.Grid>
            <Card.Grid style={gridStyle}>Deal Closer</Card.Grid>
            <Card.Grid style={gridStyle}>Offer Maker</Card.Grid>
            <Card.Grid style={gridStyle}>Machine Learning</Card.Grid>
        </Layout.Content>
    }
}