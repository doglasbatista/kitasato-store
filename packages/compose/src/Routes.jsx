import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
