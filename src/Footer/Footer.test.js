/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without errors', () => {
    const footer = document.createElement('footer');
    ReactDOM.render(<Footer />, footer);
    ReactDOM.unmountComponentAtNode(footer);
  });
});
