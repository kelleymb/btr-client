import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './Panel';

describe(`Panel Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<Panel />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})