import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.scss';

class Main extends Component {

  render() {
    return (
      <div>
        <nav className="header">
          <div>
            <span>React Training</span>
            <Link to="/home">Home</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/about">About</Link>
          </div>
          <span>Logout</span>
        </nav>
        <div className="content">
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
      </div>
    );
  }
}

export default Main;
