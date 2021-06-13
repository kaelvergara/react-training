import React, { Component } from 'react';
import './Registration.style.scss';
import axios from 'axios';
import Table from '../../components/Table/Table';
import { Link, withRouter } from 'react-router-dom';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      isLoading: false,
    }
    this.retrieveData = this.retrieveData.bind(this);
  }
  componentWillMount() {
    this.setState({
      isLoading: true
    })

    this.retrieveData();
  }

  retrieveData() {
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

  onDelete(id) {
    axios.delete(`http://localhost:4000/persons/${id}`)
      .then((res) => {
        alert('successfully deleted!')
        this.retrieveData();
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
          <Link to="/registration/add">Add</Link>
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
                <td>
                  <Link to={`/registration/edit/${p.id}`}>Edit</Link>
                  <span
                    style={{marginLeft: '8px', cursor: 'pointer'}}
                    onClick={() => this.onDelete(p.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            )
          })}
        </Table>
      </div>
    );
  }
}

export default withRouter(Registration);
