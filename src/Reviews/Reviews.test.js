/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './Reviews';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe('Reviews Component', () => {
  it('renders without errors', () => {
    const section = document.createElement('section');
    ReactDOM.render(<Reviews />, section);
    ReactDOM.unmountComponentAtNode(section);
  });

  it('Rating Search, onClick callback is fired when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Reviews onClick={callback} />);
    wrapper.find('.rating-submit').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('User Search, onClick callback is fired when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Reviews onClick={callback} />);
    wrapper.find('.user-submit').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
})