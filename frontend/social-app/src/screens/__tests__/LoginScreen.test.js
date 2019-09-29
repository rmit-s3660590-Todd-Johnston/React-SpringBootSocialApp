import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {shallow, mount} from "enzyme";

import LoginScreen from "../LoginScreen";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe("<LoginScreen/>", () => {
    it('renders without crashing', () => {
        act(() => {
            render(<LoginScreen/>, container);
        });

        expect(container).toMatchSnapshot();
    });

    it("button disabled at start", () => {
        act(() => {
            render(<LoginScreen/>, container)
        });

        expect(container).toMatchSnapshot();
        const button = document.querySelector("[data-testid=login-button]");
        expect(button.disabled).toBeTruthy();
    });

    it("button enabled after some input", () => {
        const wrapper = mount(<LoginScreen/>);

        expect(container).toMatchSnapshot();

        const usernameInput = wrapper.find('input[data-testid="username-input"]');
        const passwordInput = wrapper.find("input[data-testid='password-input']");

        usernameInput.simulate('change', { target: { value: 'Hello' } });
        passwordInput.simulate('change', { target: { value: 'world!'} });

        const button = wrapper.find("[data-testid='login-button']");
        expect(button.disabled).toBeFalsy();
    });
});
