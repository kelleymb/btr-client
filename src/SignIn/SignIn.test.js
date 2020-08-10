/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from './SignIn';

const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

describe('Reviews Component', () => {
  it('renders without errors', () => {
    const section = document.createElement('section');
    ReactDOM.render(<BrowserRouter><SignIn /></BrowserRouter>, section);
    ReactDOM.unmountComponentAtNode(section);
  });

  it('onClick callback is fired when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = shallow(<SignIn onClick={callback} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});
