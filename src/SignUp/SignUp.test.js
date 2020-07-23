import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SignUp from './SignUp';

var enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe(`SignUp Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<SignUp />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it(`onClick callback is fired when form is submitted`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<SignUp onClick={callback}/>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})