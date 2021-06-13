import React, { Component } from 'react';
import './Registration.style.scss';
import axios from 'axios';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      isLoading: false,
    }
  }
  componentWillMount() {
    this.setState({
      isLoading: true
    })
    axios.get('http://localhost:4000/persons')
      .then((res) => {
        this.setState({
          persons: res.data
        })
      })
      .catch(() => {

      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })

  }
  render() {
    return (
      <div className="registration-wrapper">
        <div className="table-controls">
          Registration
          <button>Add</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>IsBusy</td>
              <td>Hobbies</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((p, i) => {
              return (
                <tr key={i}>
                  <td>{p.firstName}</td>
                  <td>{p.lastName}</td>
                  <td>{p.age}</td>
                  <td>{p.gender}</td>
                  <td>
                    <input type="checkbox" checked={p.isBusy} />
                  </td>
                  <td>
                    {p.hobbies.join(', ')}
                  </td>
                  <td>Edit Delete</td>
                </tr>
              )
            })}
            { this.state.isLoading &&
              <tr>
                <td colspan="7">
                  <h4 className="loading-indicator">Loading...</h4>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Registration;
