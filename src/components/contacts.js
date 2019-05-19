import React, { Component } from 'react';

class Contacts extends Component {
  render() {
    return (

      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <span>Contacts</span>
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
        <div className="right">
          <h1>Sew & Cut</h1>
          <p>best suits and accessoires</p>
          <img src="https://jmsodb.com/wp-content/uploads/2018/03/Sewing20Needle.H09.2k.png" alt="needle" />

          <div className="contacts">
            <h2>Tel:</h2>
            <p>8(800) 555-35-35</p>
            <h2>Address:</h2>
            <p>Nicolas Flamel ave. 81/48</p>

          </div>
        </div>

      </div>

    );
  }
}

export default Contacts;
