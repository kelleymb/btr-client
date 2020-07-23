import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SignIn from './SignIn';

describe(`Reviews Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<SignIn />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it(`onSubmit callback is fired when form is submitted`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<SignIn onSubmit={callback}/>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})