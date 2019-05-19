import React from 'react';
import PropTypes from 'prop-types';
import '../scss/addUsersButton.scss';
// obviously a button to trigger user output
const AddUsers = ({ handleClick }) => (
  <div className="addUsers-wrapper">
    <h2>Meet our users!</h2>
    <button onClick={handleClick}><span>show</span></button>
  </div>
);

AddUsers.propTypes = {
  handleClick: PropTypes.func,
};

export default AddUsers;
