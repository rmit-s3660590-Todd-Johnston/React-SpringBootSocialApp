import React from 'react';
import ReactDOM from 'react-dom';
import {act} from "react-dom/test-utils";
import LoginScreen from "../../screens/LoginScreen";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginScreen/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("can log in with sept/dummy login", () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const mock = new MockAdapter(axios);
    const data = {response: true};

    mock.onGet('ttp://localhost:8080/authenticate').reply(200, data);
    act(() => {
        ReactDOM.render(<LoginScreen/>, div);
    });

    const button = document.querySelector("[data-testid=login-button]");
    expect(button.textContent).toBe("Log in");

    act(() => {
        button.dispatchEvent(new MouseEvent("click"))
    });

    ReactDOM.unmountComponentAtNode(div);
});
