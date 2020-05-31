import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

import Routes from './Routes';

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.querySelector('#root'),
);
