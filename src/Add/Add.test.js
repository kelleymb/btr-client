import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Add from './Add';

var enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe(`Add Component`, () => {
    
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Add />, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    
    it(`onSubmit callback is fired when button is clicked`, () => {
        const callback = jest.fn();
        const wrapper = shallow(<Add onClick={callback}/>);
        wrapper.find('.add-button').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});