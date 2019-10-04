import React, {Component} from 'react';
import {
    Avatar,
    Descriptions,
    Divider,
    Button,
    Card,
    Badge,
    Icon,
    Typography,
    Layout,
    Modal,
    Input,
} from "antd";
import AuthenticationService from "../AuthenticationService";
import UserBeanService from "../api/UserBeanService";

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
            subjects: [],
            modalVisible: false,
            editProfileText: ''
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
        //subject array
        console.log("subject state: "+ this.state.subjects[0]);
        let i;
        for (i = 0; i < this.state.subjects.length-1; i++) {
            if (this.state.subjects[i] === undefined){
                this.state.subjects[i] = "error";
            }
        }
        console.log("subject state: "+ this.state.subjects[0]);

        //mentor
        if (this.state.isMentor === undefined){
            this.setState({isMentor: true});
        }
    };

    showEditProfile = () =>{
        this.setState({
            modalVisible: true,
        });
    };

    handleOk = e => {
        let user = {
            id: this.state.userID,
            profiePic: this.state.editProfileText
        };
        console.log(e);
        UserBeanService.updateUserBean(this.state.userID , user)
            .then((res) => {
                console.log("User: " + res.data.id + " updated!");
            })
            .catch(res => console.log(res));

        this.setState({
            modalVisible: false,
        });
        this.forceUpdate();
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            modalVisible: false,
        });
    };

    handleValueChange = e => {
        console.log(e.target.value);
        this.setState({editProfileText: e.target.value})
    };

    componentDidMount() {
        this.getLoggedInUserData();
        this.nullError();
    }

    render() {
        return <Layout.Content style={{backgroundColor: "#FFFFFF", margin: 13, padding: 13}}>
            <Typography.Title>Profile</Typography.Title>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <Badge id={'bigBadge'} count={<Icon style={{marginBottom: '10px', color: 'gray'}} type={"edit"} onClick={this.showEditProfile}/>} >
                    <Avatar src={this.state.profilePic}
                            size={128} icon="user"/>
                </Badge>
            </div>

            <Modal
                visible ={this.state.modalVisible}
                title="Edit Profile Picture"
                okText="Change"
                onCancel={this.handleCancel}
                onOk={this.handleOk}
            >
                <Input placeholder={"Input link here: "} onChange={value => this.handleValueChange(value)}/>

            </Modal>

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