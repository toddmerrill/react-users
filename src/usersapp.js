import React from 'react';
import {render} from 'react-dom';

import App from './App.js'
import Main from './components/Main'

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './style/users.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider } from 'react-redux';
import store, { history } from './store';

const router = (
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={App}/>
        </Route>
    </Router>
</Provider>)

render(router, document.querySelector('#app'));
