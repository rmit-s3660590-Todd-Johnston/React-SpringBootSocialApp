import React, {Component} from 'react';
import {Avatar,Descriptions, Divider, Tooltip,Button} from "antd";



export default class ProfileScreen extends Component {
    render() {
        return <div>
            <h1>Profile</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <Tooltip placement="right" title={"Hey! Don't touch my face human"}>
                <Avatar src="https://short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg-300x300.jpg"
                        size={128} icon="user"/>
            </Tooltip>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
                <h1>Mark</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button size={'large'} style={{"background-color" : "blue"}}>
                    Message Me
                </Button>
                <Button size={'large'}>Add Friend?</Button>
            </div>
            <Divider>About Me</Divider>
            <Descriptions>
                <Descriptions.Item label="UserName">Mark</Descriptions.Item>
                <Descriptions.Item label="Telephone">9876543234</Descriptions.Item>
                <Descriptions.Item label="City">Cali</Descriptions.Item>
                <Descriptions.Item label="Address"> Planet Earth
                </Descriptions.Item>
            </Descriptions>
            <div>
            </div>
        </div>
    }
}