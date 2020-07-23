import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Reviews from './Reviews';

describe(`Reviews Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Reviews />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it(`onSubmit callback is fired when form is submitted`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Reviews onSubmit={callback}/>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})