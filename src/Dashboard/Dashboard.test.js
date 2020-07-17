import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

describe(`Panel Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Dashboard />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})