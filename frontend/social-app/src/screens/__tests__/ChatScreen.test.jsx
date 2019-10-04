import React from 'react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {shallow, mount} from "enzyme";
import ChatScreen from "../ChatScreen";


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

function getScreenParts() {
    const chatScreen = mount(<ChatScreen/>);
    const newChatModal = () => chatScreen.find('div.ant-modal-mask');
    const createNewChatButton = chatScreen.find('li[data-testid="new-chat-button"]');

    return {
        chatScreen, newChatModal, createNewChatButton
    };
}

describe("<ChatScreen/>", () => {
    it("renders without crashing", () => {
        mount(<ChatScreen/>);
    });

    it("matches the snapshot", () => {
       act(() => {
            render(<ChatScreen/>, container);
        });

        expect(container).toMatchSnapshot();
    });

    it("starts with the new chat modal closed", () => {
        const {newChatModal} = getScreenParts();
        expect(newChatModal()).toHaveLength(0)
    });

    it("opens new chat modal when button is pressed", () => {
        const {chatScreen, newChatModal, createNewChatButton} = getScreenParts();

        expect(newChatModal()).toHaveLength(0);
        createNewChatButton.simulate('click');
        expect(newChatModal()).toHaveLength(1);
    })
});