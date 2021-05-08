import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      persons: [
        { name: 'Jose', age: 1 },
        { name: 'Josie', age: 5 },
        { name: 'Mark', age: 4 }
      ]
    }
  }

  handleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        { this.state.show && <span>Hello World!</span>}
        { this.state.show &&
          <ul>
            {this.state.persons.map((person, i) => {
              return (
                <li key={i}>{person.name} - {person.age}</li>
              )
            })}
          </ul>
        }
        <button type="button" onClick={this.handleShow.bind(this)}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default App;
