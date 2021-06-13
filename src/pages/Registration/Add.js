import React, { Component } from 'react';
import './Add.style.scss'
import { Link } from 'react-router-dom'

class Add extends Component {
  constructor() {
    super();
    this.state ={
      firstName: {
        value: '',
        error: ''
      },
      lastName: {
        value: '',
        error: ''
      },
      age: {
        value: 0,
        error: ''
      },
      gender: {
        value: 'male',
        error: ''
      },
      isBusy: {
        value: false,
        error: ''
      },
      hobbies: {
        values: ['Basketball', 'Swimming'],
        error: ''
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGenderChange = this.handleGenderChange.bind(this)
    this.handleHobbiesChange = this.handleHobbiesChange.bind(this)
  }

  handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const field = {
      [target.name]: {
        ...this.state[target.name],
        value
      }
    }

    this.setState({
      ...field
    });
  }

  handleGenderChange(e) {
    this.setState({
      gender: {
        value: e.target.value
      }
    })
  }

  handleHobbiesChange(e) {
    const { value, checked } = e.target
    const hobbies = this.state.hobbies.values

    if(checked) {
      hobbies.push(value)
    } else {
      const index = hobbies.indexOf(value)
      hobbies.splice(index, 1)

    }

    this.setState({
      hobbies: {
        values: hobbies
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="add-wrapper">
        <p><Link to="/registration">Go Back</Link></p>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="formInput">
              <label className="input-label" htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={this.state.firstName.value}
                onChange={this.handleChange}/>
            </div>

            <div className="formInput">
              <label className="input-label" htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={this.state.lastName.value}
                onChange={this.handleChange}
              />
            </div>

            <div className="formInput">
              <label className="input-label" htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                name="age"
                value={this.state.age.value}
                onChange={this.handleChange}
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
                    checked={this.state.gender.value === 'male'}
                    onChange={this.handleGenderChange}
                  /> Male
                </li>
                <li>
                  <input
                    name="gender"
                    type="radio"
                    value="female"
                    checked={this.state.gender.value === 'female'}
                    onChange={this.handleGenderChange}
                  /> Female
                </li>
              </ul>
            </div>
            <div className="formInput">
              <label className="input-label" htmlFor="isBusy">Is Busy</label>
              <input
                type="checkbox"
                name="isBusy"
                checked={this.state.isBusy.value}
                onChange={this.handleChange}
              />
            </div>

            <div className="formInput">
              <label className="input-label" htmlFor="hobbies">Hobbies</label>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value="Basketball"
                    checked={this.state.hobbies.values.indexOf('Basketball') > -1}
                    onChange={this.handleHobbiesChange}
                  /> Basketball
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Swimming"
                    checked={this.state.hobbies.values.indexOf('Swimming') > -1}
                    onChange={this.handleHobbiesChange}
                  /> Swimming
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Football"
                    checked={this.state.hobbies.values.indexOf('Football') > -1}
                    onChange={this.handleHobbiesChange}
                  /> Football
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Reading"
                    checked={this.state.hobbies.values.indexOf('Reading') > -1}
                    onChange={this.handleHobbiesChange}
                  /> Reading
                </li>
              </ul>
            </div>
            <hr/>
            <button type="submit">Submit</button>
          </form>
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}

export default Add;
