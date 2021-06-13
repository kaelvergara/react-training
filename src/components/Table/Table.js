import React, { Component } from 'react';
import './Table.style.scss';

class Add extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            { this.props.columns.map((c, i) => {
              return <td key={i}>{c}</td>
            })}
          </tr>
        </thead>
        <tbody>
          { this.props.children }
          { this.props.isLoading &&
            <tr>
              <td colSpan="7">
                <h4 className="loading-indicator">Loading...</h4>
              </td>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}

export default Add;
