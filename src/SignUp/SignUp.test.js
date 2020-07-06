import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';

describe(`SignUp Component`, () => {
    it(`renders without errors`, () => {
        const section = document.createElement('section');
        ReactDOM.render(<SignUp />, section);
        ReactDOM.unmountComponentAtNode(section);
    })
})