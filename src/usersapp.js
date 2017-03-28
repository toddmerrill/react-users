import { render } from 'react-dom';
/* eslint-disable no-unused-vars */
import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
/* eslint-enable no-unused-vars */
import './style/users.css';
import App from './App';
import Main from './components/Main';

import store, { history } from './store';

const router = (
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={App}/>
        </Route>
    </Router>
</Provider>);

render(router, document.querySelector('#app'));
