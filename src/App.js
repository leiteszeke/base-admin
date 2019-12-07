import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
// Modules
import Login from './modules/Login';
import Home from './modules/Home';

const history = createBrowserHistory();

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={renderProps =>
      localStorage.getItem('base-admin') ? (
        <Component {...renderProps} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: renderProps.location }
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func
};

const App = () => (
  <BrowserRouter>
    <Switch history={history}>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
