import React, {Component} from 'react';
import axios from 'axios'
import {Avatar, Descriptions, Divider, Tooltip, Button, List, Card, Badge, Icon} from "antd";

const data = [
    {
        title: 'Skill 1',
    },
    {
        title: 'Skill 2',
    },
    {
        title: 'Skill 3',
    },
    {
        title: 'Skill 4',
    },
    {
        title: 'Skill 5',
    },
    {
        title: 'Skill 6',
    },
];


export default class ProfileScreen extends Component {
   constructor(props){
       super(props);
       this.state = {
           name: 'Name Error',
           profilePic: "https://short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg-300x300.jpg"
       };
   }

   componentDidMount() {
    //TODO get(name)
       axios.get(`http://localhost:8080/hello-world/path-variable/`)
           .then(res => {
              const name = res.data;
              this.setState(name)
           })
       }

    render(){
        return <div>
            <h1>Profile</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                    <a href={"#"}>
                    <Badge count={<Icon style={{marginBottom : '10px'}} type={"edit"}/>}>
                        <Tooltip placement="right" title={"Hey! Don't touch my face human"}>
                        <Avatar src= {this.state.profilePic}
                        size={128} icon="user"/>
                        </Tooltip>
                    </Badge>
                    </a>


            </div>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <h1>{this.state.name}</h1>

            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{marginRight: '60px'}} size={'large'} style={{"background-color" : "blue"}}>
                    Message Me
                </Button>
                <Button style={{marginLeft: '60px'}} size={'large'} >Add Friend?</Button>
            </div>
            <Divider style={{color:'black', font:'bold', marginTop:'30px'}}>About Me</Divider>
            <Descriptions>
                <Descriptions.Item label="UserName">Mark</Descriptions.Item>
                <Descriptions.Item label="Telephone">9876543234</Descriptions.Item>
                <Descriptions.Item label="City">Cali</Descriptions.Item>
                <Descriptions.Item label="Address"> Planet Earth
                </Descriptions.Item>
            </Descriptions>
            <Divider style={{color:'black', font:'bold', marginTop:'30px'}}>My Skills</Divider>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>Card content</Card>
                    </List.Item>
                )}
            />
            <div>
            </div>
        </div>
    }
}