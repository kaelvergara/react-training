import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        About
        <Switch>
          {this.props.routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

export default About;
