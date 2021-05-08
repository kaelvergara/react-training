import React, { Component } from 'react';

class Child extends Component {
  componentWillMount() {
    console.log('C-ComponentWillMount')
  }
  componentWillUnmount() {
    console.log('C-i got deleted')
  }
  componentWillReceiveProps(newProps) {
    //
    console.log('New Props: ', newProps)
  }
  render() {
    return (
      <div>
        Child
      </div>
    );
  }
}

export default Child;
