import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const item = JSON.parse(localStorage.getItem('item')) || [];

ReactDOM.render(
    <App item={item} />,
    document.getElementById('container')
);
