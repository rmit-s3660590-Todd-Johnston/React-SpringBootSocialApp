import React from 'react';
import ReactDom, {unmountComponentAtNode} from 'react-dom';
import { act } from "react-dom/test-utils";
import ProfileScreen from "../../screens/ProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {Modal} from "antd";

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

it("Testing inserting Div into profile screen", () => {
    act(() => {
        ReactDom.render(<ProfileScreen/>, container);
    });
    expect(container.textContent).toBe( "ProfileMarkMessage MeAdd Friend?About MeUserNameMarkTelephone9876543234CityCaliAddress Planet EarthMy SkillsBusiness ManDecision MakerDeal CloserOffer MakerMachine Learning");
});

it('should ', () => {
    act(() => {
        ReactDom.render(<Modal></Modal>)
    });

});