import React from 'react';
import {unmountComponentAtNode} from "react-dom";
import {mount} from "enzyme";
import RegistrationScreen from "../RegistrationScreen";


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

describe("<RegistrationScreen/>", () => {
    it("renders without crashing", () => {
        mount(<RegistrationScreen/>);
    });

    it("matches the snapshot", () => {
        expect(mount(<RegistrationScreen/>)).toMatchSnapshot()
    });

    it("won't register initially", () => {
        const wrapper = mount(<RegistrationScreen/>);

        const submitButton = wrapper.find("button[data-testid='submit-button']");
        submitButton.simulate('click');
        expect(global.window.location.pathname).toEqual('/')  // Base url for testing.
    });
});
