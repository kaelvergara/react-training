import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello',
      age: 24,
      isWorkingHard: true,
      trainor: {
        firstName: 'Kael',
        lastName: 'Vergara'
      },
      hobies: ['working', 'sleeping']
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        Message: <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p>
          Your message {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
