import React, { Component } from 'react';
import './Login.css';
import 'bulma/css/bulma.css';
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
      // <div className="login">
      //   <label for="uname"><b>Username   </b>[abc@gmail.com]</label>
      //   <input name='email' value={this.state.email} onChange={this.updateEmail} />
      //   <label for="psw"><b>Password   </b>[abc123]</label>
      //   <input name='password' type='password' value={this.state.password} onChange={this.updatePassword} />
      //   <button onClick={this.doLogin}> login</button>
      // </div>
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed. <br/> Credentials: abc@gmail.com / abc123</p>
              <div class="box">
                <figure class="avatar">
                  <img src="https://placehold.it/128x128" alt="loading..."/>
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="email" placeholder="Your Email" autofocus="" value={this.state.email} onChange={this.updateEmail} />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="password" placeholder="Your Password" value={this.state.password} onChange={this.updatePassword}/>
                    </div>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" />
                      Remember me
                </label>
                  </div>
                  <button class="button is-block is-info is-large is-fullwidth" onClick={this.doLogin}>Login</button>
                </form>
              </div>
              <p class="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
