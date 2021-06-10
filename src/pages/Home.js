import React, { Component } from 'react';
import react from '../images/react.png'
import './Home.style.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <img src={react} alt="react"/>
        <h3 >React rocks!</h3>
      </div>
    );
  }
}

export default Home;
