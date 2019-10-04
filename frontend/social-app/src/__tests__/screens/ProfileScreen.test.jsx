import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import {act, mockComponent} from "react-dom/test-utils";
import ProfileScreen from "../../screens/ProfileScreen";
import {shallow, mount} from 'enzyme';
import Badge from "../../screens/ProfileScreen";

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProfileScreen/>,div) ;
    ReactDOM.unmountComponentAtNode(div);
});


// it("Testing inserting Div into profile screen", () => {
//     act(() => {
//         ReactDom.render(<ProfileScreen/>, container);
//     });
//     expect(container.textContent).toBe( "ProfileName ErrorGo To WallMessage MeAdd to study groupAdd Friend?About MeNameMarkTelephone9876543234CityCaliAddress Planet EarthMy SkillsBusiness ManDecision MakerDeal CloserOffer MakerMachine Learning");
// });



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

// test('user data', () => {
//     wrapper = shallow(<ProfileScreen/>);
//     console.log("modal visible " + wrapper.state().editProfileText);
//
//     expect(wrapper.state().editProfileText).toEqual('');
// });



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