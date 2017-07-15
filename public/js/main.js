import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducer/index";

import App from "./containers/App";
import Home from "./containers/home-container";
import addUser from "./containers/addUser-container";
import updateUser from "./containers/updateUser-container";

import getAllUser from "./middleware/home-middleware";
import addUserMid from "./middleware/addUser-middleware";
import deleteUser from "./middleware/deleteUser-middlaware";


const createStoreWithMiddleware = applyMiddleware(getAllUser, addUserMid, deleteUser)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/addUser" component={addUser}></Route>
                <Route path="/updateUser" component={updateUser}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
);
