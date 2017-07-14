import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import reducer from "./reducer/index";
import Home from "./containers/home-container";
import getAllUser from "./middleware/home-middleware"

const createStoreWithMiddleware = applyMiddleware(getAllUser)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('app')
);
