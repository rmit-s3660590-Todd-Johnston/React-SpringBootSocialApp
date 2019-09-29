import React, {Component} from 'react';
import {Avatar, Descriptions, Divider, Tooltip, Button, List, Card, Badge, Icon, Typography} from "antd";
import {Layout} from "antd";
import AuthenticationService from "../AuthenticationService";
import UserBeanService from "../api/UserBeanService";
import update from 'react-addons-update';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    backgroundColor: 'lightgray',
};

export default class ProfileScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: undefined,
            userName: 'Temp Name',
            firstName: 'First',
            lastName: 'Last',
            profilePic: undefined,
            isMentor: false,
            subjects: []
        };
    };

//     id: 666
// ​
//     last_name: "error"
// ​
//     mentor: false
// ​
//     name: "error"
// ​ ​
//     profilePic: "https://short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg-300x300.jpg"
// ​
//     subjects: Array(4) [ null, null, null, … ]


    getLoggedInUserData = () => {
        console.log("Logged in user: " + AuthenticationService.getLoggedInUserName());
             UserBeanService.retrieveUserBeanByUserName(AuthenticationService.getLoggedInUserName())
                 .then((res) => {
                     console.log(res.data);
                     console.log(res.data.subjects);
                     this.setState({
                         userID: res.data.id,
                         userName: res.data.user_name,
                         firstName: res.data.name,
                         lastName: res.data.last_name,
                         profilePic: res.data.profilePic,
                         isMentor: res.data.mentor,
                         subjects: res.data.subjects
                     });
                     })
                 .catch(err => console.error(err));
    };

    nullError(){
        console.log("subject state: "+ this.state.subjects[0]);
        let i;
        for (i = 0; i < this.state.subjects.length-1; i++) {
            if (this.state.subjects[i] === undefined){
                this.state.subjects[i] = "error";
            }
        }
       // this.setState({subjects: update(this.state.subjects, {1:{$set: "error"} })});
        console.log("subject state: "+ this.state.subjects[0]);

        if (this.state.isMentor === undefined){
            this.setState({isMentor: true});
        }
    }


    componentWillMount() {
        this.getLoggedInUserData();
        this.nullError();
    }

    componentDidMount() {
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
                <Descriptions.Item label="First Name">{this.state.firstName}</Descriptions.Item>
                <Descriptions.Item label="Last Name">{this.state.lastName}</Descriptions.Item>
                <Descriptions.Item label="Mentor status">{this.state.isMentor.toString()}</Descriptions.Item>
                <Descriptions.Item label="User ID: "> {this.state.userID}</Descriptions.Item>
            </Descriptions>

            <Divider style={{color: 'black', font: 'bold', marginTop: '30px'}}>My Skills</Divider>
            <Card.Grid style={gridStyle}>{this.state.subjects[0]}</Card.Grid>
            <Card.Grid style={gridStyle}>{this.state.subjects[1]}</Card.Grid>
            <Card.Grid style={gridStyle}>{this.state.subjects[2]}</Card.Grid>
            <Card.Grid style={gridStyle}>{this.state.subjects[3]}</Card.Grid>
        </Layout.Content>
    }
}