import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import {act, mockComponent} from "react-dom/test-utils";
import ProfileScreen from "../../screens/ProfileScreen";
import {shallow, mount} from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProfileScreen/>,div) ;
    ReactDOM.unmountComponentAtNode(div);
});


test('edit profile not shown', () => {
    let wrapper = shallow(<ProfileScreen/>);
    console.log("modal visible " + wrapper.state().modalVisible);

    expect(wrapper.state().modalVisible).toEqual(false);
});

test('edit profile text is empty', () => {
    let wrapper = shallow(<ProfileScreen/>);
    console.log("modal visible " + wrapper.state().editProfileText);

    expect(wrapper.state().editProfileText).toEqual('');
});


test('edit profile button is clickable', () => {
    let wrapper = shallow(<ProfileScreen/>);
    const div = document.createElement('div');
    document.body.appendChild(div);

    expect(wrapper.state().modalVisible).toEqual(false);

    act(() => {
        ReactDOM.render(<ProfileScreen/>, div);
    });

    const badge = document.querySelector("[data-testid=edit-button]");

    act(() => {
        badge.dispatchEvent(new MouseEvent("click"))
    });
    //if no error button is clickable
});



test('wall button click', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    act(() => {
        ReactDOM.render(<ProfileScreen/>, div);
    });

    const button = document.querySelector("[data-testid=test-wall]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click"))
    });
    //if no error button is clickable
});

test('message button click', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    act(() => {
        ReactDOM.render(<ProfileScreen/>, div);
    });

    const button = document.querySelector("[data-testid=test-message]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click"))
    });
    //if no error button is clickable
});

test('study group button click', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    act(() => {
        ReactDOM.render(<ProfileScreen/>, div);
    });

    const button = document.querySelector("[data-testid=test-study]");

    act(() => {
        button.dispatchEvent(new MouseEvent("click"))
    });
    //if no error button is clickable
});

// it("can log in with sept/dummy login", () => {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//
//     let wrapper = shallow(<ProfileScreen/>);
//
//     const mock = new MockAdapter(axios);
//     const data = {response: true};
//
//     mock.onGet('http://localhost:8080/users/sept').reply(200, data);
//     act(() => {
//         ReactDOM.render(<ProfileScreen/>, div);
//     });
//
//     console.log(wrapper.state().firstName);
//
//     const text = document.querySelector("[data-testid=test-fname]");
//     console.log(text);
//     expect(text).toBe('sept');
//
// });