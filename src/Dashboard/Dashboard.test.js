import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Dashboard from './Dashboard';

describe(`Panel Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Dashboard />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it(`onClick callback is fired when button is clicked`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Dashboard onClick={callback}/>);
        wrapper.find('button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
})