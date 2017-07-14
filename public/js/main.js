import React from 'react';
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import reducer from "./reducer/index";
import Home from "./containers/home-container"

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('app'));
