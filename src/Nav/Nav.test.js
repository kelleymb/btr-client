import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

describe(`Nav Component`, () => {
    it(`renders without errors`, () => {
        const ul = document.createElement('ul');
        ReactDOM.render(<Nav />, ul);
        ReactDOM.unmountComponentAtNode(ul);
    })
})