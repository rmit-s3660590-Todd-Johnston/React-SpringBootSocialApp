import React, {Component} from 'react';
import axios from 'axios'
import {Avatar, Descriptions, Divider, Tooltip, Button, List, Card, Badge, Icon} from "antd";

const gridStyle = {
    width: '25%',
    textAlign: 'center',
    backgroundColor: 'lightgray',
};

export default class ProfileScreen extends Component {
   constructor(props){
       super(props);
       this.state = {
           name: 'Mark',
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
                    <Badge count={<Icon style={{marginBottom : '10px', color:'gray'}} type={"edit"}/>}>
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
                <Button style={{marginRight: '60px', backgroundColor : "aqua"}} size={'large'}>
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
            <Card.Grid style={gridStyle}>Business Man</Card.Grid>
            <Card.Grid style={gridStyle}>Decision Maker</Card.Grid>
            <Card.Grid style={gridStyle}>Deal Closer</Card.Grid>
            <Card.Grid style={gridStyle}>Offer Maker</Card.Grid>
            <Card.Grid style={gridStyle}>Machine Learning</Card.Grid>
        </div>
    }
}