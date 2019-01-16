import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    localStorage.setItem('loggedInUser', null);
  }

  updateEmail = (e) => {
    this.setState({
      email: e.currentTarget.value
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.currentTarget.value
    })
  }

  doLogin = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const { email, password } = this.state;
    let userExist = Object.keys(users).indexOf(email) > -1;
    if (userExist && users[email] === password) {
      localStorage.setItem('loggedInUser', email);
      this.props.history.push('/dashboard');
    } else {
      alert('wrong user id and password');
    }
  }

  render() {
    return (
      <div className="login">
        <span> id</span><input name='email' value={this.state.email} onChange={this.updateEmail} />
        <span>password</span><input name='password' type='password' value={this.state.password} onChange={this.updatePassword} />
        <button onClick={this.doLogin}> login</button>
      </div>
    );
  }
}

export default Login;
