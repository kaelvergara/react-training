import React, { Component } from 'react';
import Cell from './Cell'

class App extends Component {
  constructor() {
    super();

    this.state = {
      grid: [
        [1,2,3,4,5,6,7,8,9,10],
        [11,12,13,14,15,16,17,18,19,20],
        [21,22,23,24,25,26,27,28,29,30],
        [31,32,33,34,35,36,37,38,39,40],
        [41,42,43,44,45,46,47,48,49,50]
      ]
    }
  }

  randomizeGrid() {
    // randomly increment a value on the grid
    const y = this.getRandomNumber(this.state.grid.length)
    const x = this.getRandomNumber(this.state.grid[0].length)
    this.state.grid[y][x]++

    // re-render the grid
    this.setState({
      grid: [...this.state.grid]
    })
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  render() {
    return (
      <div>Grid
        <table>
          <tbody>
            {this.state.grid.map((i, iIndex) => {
              return (
                <tr key={iIndex}>
                  {i.map((o, oIndex) => {
                    return (
                      <Cell key={oIndex} value={o} />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <button style={{marginTop: '20px'}} type="button" onClick={this.randomizeGrid.bind(this)}>Randomize + 1</button>
      </div>
    );
  }
}

export default App;
