import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './Main.scss';
import { withRouter } from 'react-router-dom'
import { authenticationStore } from '../store/authentication'

class Main extends Component {

  logout() {
    authenticationStore.setIsLoggedIn(false)
    this.props.history.push('/login')
  }

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
          <span onClick={this.logout.bind(this)} style={{cursor: 'pointer'}}>Logout</span>
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
                exact={route.exact ? true : false}
              />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
