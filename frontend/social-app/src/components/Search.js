import React, {Component} from 'react';
import {Input} from "antd";
import axios from 'axios'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            value: undefined,
            isFocus: false,
            isClearing: false,
        };
    }

    handleFocus = (e) => {
        if (!this.state.isClearing) {
            this.setState({isFocus: true});
            const onFocus = this.props.onFocus;
            if (onFocus) {
                onFocus(e);
            }
        }
    };

    handleInputChange = () => {
        this.setState({
            value: this.search.value
        }, () => {
            if (this.state.value.length > 1) {
                this.getData();
            }
        })
    };

    handleMouseDown = () => {
        this.setState({isClearing: true});
    };

    handleMouseLeave = () => {
        this.Input.refs.input.focus();
        this.setState({isClearing: false});
    };

    handleClick = () => {
        this.setState({value: ''}, () => {
            const onChange = this.props.onChange;
            if (onChange) {
                onChange('');
            }
            this.Input.refs.input.focus();
            this.setState({isClearing: false});
        });
    };

    handlePressEnter = () => {
        const onSearch = this.props.onSearch;
        if (onSearch) {
            onSearch(this.state.value);
        }
    }

    getData = () => {
        axios.get(`http://localhost:4200/users`)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    users: responseData
                })
            })
    };


    render() {
        return (
            <div>
                <Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton/>
            </div>
        )
    }

}