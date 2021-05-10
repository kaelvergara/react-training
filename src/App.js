import React, { Component } from 'react';
import Child from './Child';
import './app.style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  changeMessage(newMessage) {
    this.setState({
      message: newMessage
    }, () => {
      console.log(this.state.message)
    })
  }

  render() {
    return (
      <div>
        Message: <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>
          Your message {this.state.message}
        </p>
        <button type="button" className="btn">button(parent)</button>
        <hr />
        <Child message={this.state.message} changeMessage={this.changeMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;
