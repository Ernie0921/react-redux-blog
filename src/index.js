import React from 'react';

import ReactDom from 'react-dom';
import App from './App'


import {Provider } from 'react-redux';
import store from "./app/store";

//wrapping provder with store to app component so all props are aviable globally 
ReactDom.render(
    <Provider store={store}>  
        <App />
    </Provider>,
    document.getElementById("root"))