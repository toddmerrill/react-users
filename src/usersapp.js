import React from 'react';
import {render} from 'react-dom';
// import Users from './users.js';
import App from './App.js'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './style/users.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider } from 'react-redux';
import store, { history } from './store';

const router = (
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={App}></IndexRoute>
        </Route>
    </Router>
</Provider>)

render(router, document.querySelector('#app'));
