import React, { Component } from 'react';

class Child extends Component {
  handleChangeMessage() {
    this.props.changeMessage('Changed parent state from child!');
  }
  render() {
    return (
      <div>
        Message from Parent {this.props.message}
        <button onClick={this.handleChangeMessage.bind(this)}>Change Message</button>
      </div>
    );
  }
}

export default Child;
