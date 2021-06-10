import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      isInvalid: false,
      isSuccessful: false,
      isAuthorized: false,
      loading: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
      isInvalid: false,
      isSuccessful: false
    })
    axios.post('http://localhost:4000/auth', {
      firstName: this.state.username,
      lastName: this.state.password
    })
    .then((response) => {
      this.setState({
        authorized: true,
        isInvalid: false,
        isSuccessful: true,
      })
    })
    .catch((error) => {
      this.setState({
        isInvalid: true
      })
    })
    .finally(_ => {
      this.setState({ loading: false })
    });
  }

  render() {
    return (
      <div className="login-wrapper">
        <form
          className="login-content"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleInputChange}
            value={this.state.username}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />

          { this.state.isInvalid && <span className="error">Invalid username/password</span>}
          { this.state.isSuccessful && <span className="success">Success!</span>}

          <button
            type="submit"
            disabled={!(this.state.username && this.state.password)}
          >
            { this.state.loading ? 'Loading' : 'Submit'}
          </button>
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </form>
      </div>
    );
  }
}

export default Login;
