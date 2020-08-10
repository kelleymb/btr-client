/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe('Panel Component', () => {
  it('renders without errors', () => {
    const section = document.createElement('section');
    ReactDOM.render(<BrowserRouter><Dashboard /></BrowserRouter>, section);
    ReactDOM.unmountComponentAtNode(section);
  });

  it('onClick callback is fired when button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Dashboard onClick={callback}/>);
    wrapper.find('.signout-button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
})