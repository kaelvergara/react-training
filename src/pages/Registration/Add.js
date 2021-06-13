import React, { Component } from 'react';
import './Add.style.scss'
import { Link } from 'react-router-dom'

class Add extends Component {
  render() {
    return (
      <div className="add-wrapper">
        <p><Link to="/registration">Go Back</Link></p>
        <div className="form-wrapper">
          <form>
            <div className="formInput">
              <label className="input-label" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
              />
            </div>
            <div className="formInput">
              <label className="input-label" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
              />
            </div>
            <div className="formInput">
              <label className="input-label" htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                name="age"
              />
            </div>
            <div className="formInput">
              <label className="input-label" htmlFor="gender">Gender</label>
              <ul>
                <li>
                  <input
                    name="gender"
                    type="radio"
                    value="male"
                  /> Male
                </li>
                <li>
                  <input
                    name="gender"
                    type="radio"
                    value="female"
                  /> Female
                </li>
              </ul>
            </div>
            <div className="formInput">
              <label className="input-label" htmlFor="isBusy">Is Busy</label>
              <input
                type="checkbox"
                name="isBusy"
              />
            </div>
            <div className="formInput">
              <label className="input-label" htmlFor="hobbies">Hobbies</label>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="Basketball"
                  /> Basketball
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Swimming"
                  /> Swimming
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Football"
                  /> Football
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Reading"
                  /> Reading
                </li>
              </ul>
            </div>
            <hr/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
