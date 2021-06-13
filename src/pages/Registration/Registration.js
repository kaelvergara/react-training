import React, { Component } from 'react';
import './Registration.style.scss';

class Registration extends Component {
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
            <tr>
              <td>Tim</td>
              <td>Duncan</td>
              <td>18</td>
              <td>Male</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>Basketball, Swimming</td>
              
              <td>Edit Delete</td>
            </tr>
            <tr>
              <td>Tim</td>
              <td>Duncan</td>
              <td>18</td>
              <td>Male</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>Basketball, Swimming</td>
              
              <td>Edit Delete</td>
            </tr>
            <tr>
              <td>Tim</td>
              <td>Duncan</td>
              <td>18</td>
              <td>Male</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>Basketball, Swimming</td>
              
              <td>Edit Delete</td>
            </tr>
          </tbody>
        </table>
      </div>




    );
  }
}

export default Registration;
