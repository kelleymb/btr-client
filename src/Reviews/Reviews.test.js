import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Reviews from './Reviews';

var enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe.only(`Reviews Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Reviews />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it(`Rating Search, onSubmit callback is fired when form is submitted`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Reviews onSubmit={callback}/>);
        wrapper.update()
        wrapper.find('rating-search-form').simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it(`User Search, onSubmit callback is fired when form is submitted`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Reviews onSubmit={callback}/>);
        wrapper.update()
        wrapper.find('user-search-form').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})