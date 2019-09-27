import React, {Component} from 'react';
import {Input} from "antd";
import UserBeanService from "../api/UserBeanService";

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

    render() {
        console.log(this.state.users);
        return (
            <div>
                <Input.Search placeholder="input search text" onSearch={value => console.log(value)} enterButton/>
            </div>
        )
    }

}