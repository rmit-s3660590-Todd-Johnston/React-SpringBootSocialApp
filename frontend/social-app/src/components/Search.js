import { Input } from 'antd';
import React, {Component} from 'react';
import axios from 'axios'

export default class Search extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/groups')
            .then(response => response.json())
            .then(data => this.setState({groups: data, isLoading: false}));
    }


    render(){
        return(
        <div>
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </div>
        )
    }

}