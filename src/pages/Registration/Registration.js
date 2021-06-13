import React, { Component } from 'react';
import './Registration.style.scss';
import axios from 'axios';
import Table from '../../components/Table/Table';

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
    const columns = ['First Name', 'Last Name', 'Age', 'Gender', 'IsBusy', 'Hobbies', '']

    return (
      <div className="registration-wrapper">
        <div className="table-controls">
          Registration
          <button>Add</button>
        </div>
        <Table
          columns={columns}
          rows={this.state.persons}
          isLoading={this.state.isLoading}
        >
          {this.state.persons.map((p, i) => {
            return (
              <tr key={i}>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.isBusy}</td>
                <td>
                  {p.hobbies.join(', ')}
                </td>
                <td>Edit Delete</td>
              </tr>
            )
          })}
        </Table>
      </div>
    );
  }
}

export default Registration;
