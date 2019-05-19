import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogIn from './logIn';
// sign in page
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
      users: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
   get's data from input and puts it to database
   clears the fields
  */

  /*FIXME*/
  /* NO VALIDATION, NO STYLES*/
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      user_first_name: this.refs.user_name.value,
      user_last_name: this.refs.user_lastname.value,
      user_email: this.refs.user_email.value,
      user_password: this.refs.user_password.value,
    };

    const request = new Request('http://localhost:3001/api/new-users', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data),
    });

    fetch(request)
      .then((response) => {
        response.json()
          .then((data) => {
            console.log(data);
          });
      });
    this.setState({ signed: true });
    this.refs.user_name.value = '';
    this.refs.user_lastname.value = '';
    this.refs.user_email.value = '';
    this.refs.user_password.value = '';
  }

  render() {
    const { signed } = this.state;

    return (

      <div>
        {signed ? (
          <div className="sign-success">
            <h2>Great! now Log In!</h2>
            {' '}
            <Link to="/logIn"><button>Log In</button></Link>
          </div>
        ) : (
          <form className="signIn-form" ref="_userForm">
            <input type="text" ref="user_name" placeholder="First name..." required />
            <input type="text" ref="user_lastname" placeholder="Last name..." required />
            <input type="Email" ref="user_email" placeholder="email..." required />
            <input type="password" ref="user_password" placeholder="password..." required />
            <button type="submit" onClick={this.handleSubmit}>sign in</button>
          </form>
        )}
      </div>

    );
  }
}

export default SignIn;
