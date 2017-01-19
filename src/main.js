import React from 'react';
import {render} from 'react-dom';
import Users from './users.js';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './style/users.css';

render(<Users />, document.querySelector('#app'));
