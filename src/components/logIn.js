import React from 'react';
import { Link } from 'react-router-dom';
// LogIn page
class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      failed: false,
      users: [],
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  /*
    Get's data from input fields
    requests data from database
    checks if input value is correct
    set's data to state if correct for further output
    clears the fields
  */
  handleLogIn(e) {
    e.preventDefault();
    const input_user_email = this.refs.email.value;
    const input_user_password = this.refs.password.value;
    const request = new Request('http://localhost:3001/api/users', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' }),

    });
    fetch(request)
      .then((response) => {
        response.json()
          .then((data) => {
            const identified = data.filter(el => (el.user_email === input_user_email && el.user_password === input_user_password));
            if (identified.length) {
              this.setState({ failed: false });
              this.setState({ loggedIn: true });
              this.setState({ users: [...data] });
            } else {
              this.setState({ failed: true });
            }
            this.refs.email.value = '';
            this.refs.password.value = '';
            this.refs.email.focus();
          });
      });
  }

  // if data is incorrect will return a proposal to sign in
  renderResult() {
    if (this.state.failed) {
      return (
        <div className="user-not-found">
          <h1>No such user detected. Try again or sign in!</h1>
          <Link to="/signin"><button>Sign In</button></Link>
        </div>
      );
    }
    return (
      ''
    );
  }

  render() {
    return (
      <form className="login">
        <input type="text" placeholder="email" ref="email" required />
        <input type="text" placeholder="password" ref="password" required />
        <button type="submit" onClick={this.handleLogIn}>Log in</button>
        {this.renderResult()}
        {this.state.loggedIn ? (
          <div className="db-output">
            <h2>Success</h2>
            {this.state.users.map((el, i) => (
              <div className="user-db">
                <h2>
                  {`${el.user_first_name} ${el.user_last_name}`}
                </h2>
                <span>{el.user_email}</span>

              </div>
            ))}
          </div>
        ) : ''}
      </form>
    );
  }
}


export default LogIn;
