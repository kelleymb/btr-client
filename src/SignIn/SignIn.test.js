import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';

var enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe(`Reviews Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<BrowserRouter><SignIn /></BrowserRouter>, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it(`onClick callback is fired when form is submitted`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<SignIn onClick={callback}/>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})