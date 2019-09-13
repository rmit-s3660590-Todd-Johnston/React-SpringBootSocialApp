import { Input } from 'antd';
import React, {Component} from 'react';
import axios from 'axios'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            isFocus: false,
            isClearing: false,
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePressEnter = this.handlePressEnter.bind(this);
    }

    handleFocus(e) {
        if (!this.state.isClearing) {
            this.setState({ isFocus: true });
            const onFocus = this.props.onFocus;
            if (onFocus) {
                onFocus(e);
            }
        }
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({ value }, () => {
            const onChange = this.props.onChange;
            if (onChange) {
                onChange(value);
            }
        });
    }

    handleMouseDown() {
        this.setState({ isClearing: true });
    }

    handleMouseLeave() {
        this.Input.refs.input.focus();
        this.setState({ isClearing: false });
    }

    handleClick() {
        this.setState({ value: '' }, () => {
            const onChange = this.props.onChange;
            if (onChange) {
                onChange('');
            }
            this.Input.refs.input.focus();
            this.setState({ isClearing: false });
        });
    }

    handlePressEnter() {
        const onSearch = this.props.onSearch;
        if (onSearch) {
            onSearch(this.state.value);
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api/')
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