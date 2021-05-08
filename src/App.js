import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      id: 1
    }
  }

  componentWillMount() {
    console.log('P-ComponentWillMount')
  }

  // componentDidMount() {
  //   console.log('P-ComponentDidMount')
  // }

  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  handleChange(e) {
    this.setState({
      id: e.target.value
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick.bind(this)} >Show/Hide</button>
        {this.state.show && <Child id={this.state.id}/>}
        <hr/>
        <input type="text" value={this.state.id} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default App;
