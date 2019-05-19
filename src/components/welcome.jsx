import React, { Component } from 'react';
// welcome page
class Welcome extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <span>Welcome</span>
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
        </div>
        <iframe width="800" height="355" src="https://www.youtube.com/embed/ndlkzvFoMi0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    );
  }
}

export default Welcome;
