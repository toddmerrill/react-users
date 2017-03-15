import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import { browserHistory } from 'react-router'

import rootReducer from './reducers/index';

// static state to play with while moving to redux
const serverResponse = {
    "users": [{
        "userId": "uu5dgnvdc",
        "firstName": "Dannydddd",
        "lastName": "O' Te heelwicha",
        "age": "33"
    }, {
        "userId": "oi7i7lpte",
        "firstName": "Johnny",
        "lastName": "Blow",
        "age": "5455"
    }, {
        "userId": "omp3gqzry",
        "firstName": "First",
        "lastName": "Last",
        "age": "0"
    }, {
        "userId": "k49e0vv9s",
        "firstName": "Daniel J.",
        "lastName": "Whaaa?",
        "age": "999"
    }, {
        "userId": "73d9j3t0y",
        "firstName": "Jimmy Joe",
        "lastName": "McWhirtyloops",
        "age": "47"
    }, {
        "userId": "tutadlocy",
        "firstName": "Joseph",
        "lastName": "Blow",
        "age": "333"
    }]
};

const defaultState = {
    users: serverResponse.users,
    currentUser: serverResponse.users[0]
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
