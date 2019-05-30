import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from '../components/Main';
import NotFoundPage from '../components/NotFoundPage';

export const history = createBrowserHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;