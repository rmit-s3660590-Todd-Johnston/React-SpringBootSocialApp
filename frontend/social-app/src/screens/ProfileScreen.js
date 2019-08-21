import React, {Component} from 'react';
import {Avatar } from "antd";


export default class ProfileScreen extends Component {
    render() {
        return <div>
        <h1>Profile</h1>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
    <Avatar src="https://short-biography.com/wp-content/uploads/mark-zuckerberg/Mark-Zuckerberg-300x300.jpg" size={128} icon="user" />
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
    <h1>Mark</h1>
        </div>
        <div>

        </div>
        </div>

    }