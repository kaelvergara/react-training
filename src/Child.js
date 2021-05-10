import React, { Component } from 'react';
import './child.style.scss';

class Child extends Component {
  handleChangeMessage() {
    this.props.changeMessage('Changed parent state from child!');
  }
  render() {
    return (
      <div className="child">
        Message from Parent {this.props.message}
        <button onClick={this.handleChangeMessage.bind(this)}>button(child)</button>
      </div>
    );
  }
}

export default Child;
