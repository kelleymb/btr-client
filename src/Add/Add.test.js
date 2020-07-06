import React from 'react';
import ReactDOM from 'react-dom';
import Add from './Add';

describe(`Add Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Add />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})