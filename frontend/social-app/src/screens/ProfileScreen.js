import React, {Component} from 'react';
import {Avatar,Descriptions, Divider, Tooltip,Button, List, Card} from "antd";

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];


export default class ProfileScreen extends Component {
    state = {

    }


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