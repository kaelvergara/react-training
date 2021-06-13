import React, { Component } from 'react';
import './Edit.style.scss'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Edit extends Component {
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
      isLoading: false
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
    const firstName = this.state.firstName.value
    const id = this.props.match.params.id


    // required
    if (!firstName) {
      this.setState({
        firstName: {
          ...this.state.firstName,
          error: 'Required'
        }
      })
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      this.setState({
        firstName: {
          ...this.state.firstName,
          error: 'Please enter letters only'
        }
      })
    } else {
      this.setState({
        firstName: {
          ...this.state.firstName,
          error: ''
        }
      })
    }

    const payload = {
      firstName: this.state.firstName.value,
      lastName: this.state.lastName.value,
      age: this.state.age.value,
      gender: this.state.gender.value,
      isBusy: this.state.isBusy.value,
      hobbies: this.state.hobbies.values
    }

    this.setState({
      isLoading: true
    })
    axios.put(`http://localhost:4000/persons/${id}`, payload)
      .then(() => {
        alert('successfully updated')
        this.props.history.push('/registration')
      })
      .catch(() => {

      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  componentWillMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:4000/persons/${id}`)
    .then((res) => {
      this.setState({
        firstName: {
          value: res.data.firstName,
          error: ''
        },
        lastName: {
          value: res.data.lastName,
          error: ''
        },
        age: {
          value: res.data.age,
          error: ''
        },
        gender: {
          value: res.data.gender,
          error: ''
        },
        isBusy: {
          value: res.data.isBusy,
          error: ''
        },
        hobbies: {
          values: res.data.hobbies,
          error: ''
        },
      })
    })
    .catch(() => {

    })
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
                onChange={this.handleChange}
              />
              { this.state.firstName.error &&
                <span className="error">{this.state.firstName.error}</span>
              }
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
                    value="Male"
                    checked={this.state.gender.value === 'Male'}
                    onChange={this.handleGenderChange}
                  /> Male
                </li>
                <li>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    checked={this.state.gender.value === 'Female'}
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

export default withRouter(Edit);
