import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './Main.scss';

class Main extends Component {

  render() {
    return (
      <div>
        <nav className="header">
          <div>
            <span>React Training</span>
            <NavLink to="/home"  activeClassName="active">Home</NavLink>
            <NavLink to="/registration"  activeClassName="active">Registration</NavLink>
            <NavLink to="/about"  activeClassName="active">About</NavLink>
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
