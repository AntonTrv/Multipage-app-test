import React, { Component } from 'react';
import AddUsers from './AddUsers';
import ListOfUsers from './ListOfUsers';
import MoreButton from './MoreButton';
// clients
class Clients extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: [],
      error: false,
    };

    this.getUsers = this.getUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
  }

  // fetch and operate data from api
  getUsers() {
    const url = 'https://randomuser.me/api/?results=6';
    fetch(url)
      .then(respond => respond.json())
      .then(data => this.setState({ users: [...this.state.users, ...data.results] }))
      .catch(error => this.setState({ error, isLoading: false }));
    this.setState({ loading: true });
  }

  // clears users from the state
  clearUsers() {
    this.setState({ users: [], error: false });
  }


  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { users, error } = this.state;
    const { getUsers } = this;
    const { clearUsers } = this;

    return (
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <span>clients</span>
            <span>page</span>
          </div>
          <div className="aside-left">
            <span>></span>
            <span>></span>
            <span>></span>
            <span>></span>
            <span>></span>
          </div>
        </div>
        <div className="right-clients">
          <AddUsers handleClick={getUsers} />
          <ListOfUsers data={users} />
          {users.length ? <MoreButton handleClick={getUsers} clear={clearUsers} /> : ''}
          {error ? <h2 style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>Error</h2> : ''}
        </div>
        <div className="decoration-mannequin" />
      </div>
    );
  }
}

export default Clients;
