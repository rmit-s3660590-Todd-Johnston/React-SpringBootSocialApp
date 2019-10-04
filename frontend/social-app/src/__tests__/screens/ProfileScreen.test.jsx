import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM, {render, unmountComponentAtNode} from 'react-dom';
import {act, mockComponent} from "react-dom/test-utils";
import ProfileScreen from "../../screens/ProfileScreen";
import {shallow, mount} from 'enzyme';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ProfileScreen/>,div) ;
    ReactDOM.unmountComponentAtNode(div);
});

describe("<ProfileScreen/>", () => {
    it('edit profile not shown at start', () => {
        act(() => {
            render(<ProfileScreen/>, container)
        });

        expect(container).toMatchSnapshot();
    });

    let wrapper = shallow(<ProfileScreen/>);
    console.log("modal visible " + wrapper.state().modalVisible);

    expect(wrapper.state().modalVisible).toEqual(false);

    it("modal isn't shown", () => {
        act(() => {
            render(<ProfileScreen/>, container)
        });

        expect(container).toMatchSnapshot();
        expect(wrapper.state().modalVisible).toBe(false);

    });

    it("modal is shown after click", () => {
        act(() => {
            render(<ProfileScreen/>, container)
        });
        const profileScreen = mount(<ProfileScreen/>)

        expect(container).toMatchSnapshot();
        const button = profileScreen.find('[data-testid="edit-button"]');
        button.at(0).simulate('click', profileScreen.setState({modalVisible: true}));
        expect(profileScreen.state().modalVisible).toBe(true);
        //this should be true

    });

    it('should return changed name', () => {
        render(<ProfileScreen/>, container)
    });
    const profileScreen = mount(<ProfileScreen/>)
    expect(container).toMatchSnapshot();
    const firstName = profileScreen.find('[data-testid="test-name"]');
    profileScreen.setState({firstName: 'Test', lastName: 'Last'})
    expect(firstName.text()).toBe('Test Last');


    it('edit profile text is empty', () => {
        let wrapper = shallow(<ProfileScreen/>);
        console.log("modal visible " + wrapper.state().editProfileText);

        expect(wrapper.state().editProfileText).toEqual('');
    });
});

//
//     it('edit profile button is clickable', () => {
//         let wrapper = shallow(<ProfileScreen/>);
//         const div = document.createElement('div');
//         document.body.appendChild(div);
//
//         expect(wrapper.state().modalVisible).toEqual(false);
//
//         act(() => {
//             let wrapper = shallow(<ProfileScreen/>, div);
//         });
//
//         const badge = document.querySelector("[data-testid=edit-button]");
//
//         act(() => {
//             badge.dispatchEvent(new MouseEvent("click"))
//         });
//         //if no error button is clickable
//     });
//
//
//
//     it('wall button click', () => {
//         const div = document.createElement('div');
//         document.body.appendChild(div);
//
//         act(() => {
//             ReactDOM.render(<ProfileScreen/>, div);
//         });
//
//         const button = document.querySelector("[data-testid=test-wall]");
//
//         act(() => {
//             button.dispatchEvent(new MouseEvent("click"))
//         });
//         //if no error button is clickable
//     });
//
//     it('message button click', () => {
//         const div = document.createElement('div');
//         document.body.appendChild(div);
//
//         act(() => {
//             ReactDOM.render(<ProfileScreen/>, div);
//         });
//
//         const button = document.querySelector("[data-testid=test-message]");
//
//         act(() => {
//             button.dispatchEvent(new MouseEvent("click"))
//         });
//         //if no error button is clickable
//     });
//
//     it('study group button click', () => {
//         const div = document.createElement('div');
//         document.body.appendChild(div);
//
//         act(() => {
//             ReactDOM.render(<ProfileScreen/>, div);
//         });
//
//         const button = document.querySelector("[data-testid=test-study]");
//
//         act(() => {
//             button.dispatchEvent(new MouseEvent("click"))
//         });
//         //if no error button is clickable
//     });
//
// });
// ;