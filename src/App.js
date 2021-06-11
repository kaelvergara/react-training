import React, { Component } from 'react';
import { routes } from './route-utils';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { authenticationStore } from './store/authentication';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={props => {
                if (route.isGuarded && !authenticationStore.isloggedIn) {
                  return (
                    <Redirect
                      to={{
                        pathname: "/login"
                      }}
                    />
                  )
                } else {
                  return <route.component {...props} routes={route.routes} />
                }
              }}
            />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
