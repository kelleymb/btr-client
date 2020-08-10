/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav Component', () => {
  it('renders without errors', () => {
    const ul = document.createElement('ul');
    ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, ul);
    ReactDOM.unmountComponentAtNode(ul);
  });
});
