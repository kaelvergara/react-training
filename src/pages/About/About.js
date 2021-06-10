import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './About.style.scss';

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <ul>
          <li><NavLink to="/about/company-profile" activeClassName="active">Company Profile</NavLink></li>
          <li><NavLink to="/about/contact-us" activeClassName="active">Contact Us</NavLink></li>
        </ul>

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
