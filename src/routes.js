import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/women" component={Women} />
    <Route path="/men" component={Men} />
    <Route path="/kids" component={Kids} />
  </Switch>
);

export default Routes;