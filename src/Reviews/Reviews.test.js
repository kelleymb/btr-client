import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './Reviews';

describe(`Reviews Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Reviews />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})