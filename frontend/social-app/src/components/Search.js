import React, {Component} from 'react';
import {Input} from "antd";
import UserBeanService from "../api/UserBeanService";
import SearchScreen from "../screens/SearchScreen";

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }


    searchArray = (input) => {
        var i;
        for (i = 0; i < this.state.users.length-1; i++){
            if(this.state.users[i] === input){
                // this.setState({searchUser: this.state.users[i]})
                this.props.updateItems(this.state.users[i]);
                break;
            }
        }
    };

    getData = () => {
        UserBeanService.retrieveAllUserBeans()
            .then((res) => {
                console.log("RES", res);
                this.setState({users: res.data});
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getData();
    }

    render(){
        console.log(this.state.users);
        return (
            <div>

                <Input.Search placeholder="input search text" onSearch={input => this.searchArray(input)} enterButton/>
            </div>
        )
    }
}