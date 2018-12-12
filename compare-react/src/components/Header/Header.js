import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="nav has-shadow">
  <div className="container">
    <div className="nav-left">
      <a routerLink="/" className="nav-item">MyCompany</a>
    </div>
    <span className="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <div className="nav-right nav-menu">

      {/* <a routerLink="/" className="nav-item r-item">Home</a>
      <a className="nav-item r-item">About</a>
      <a className="nav-item r-item">Features</a>
      <a routerLink="/faq" className="nav-item r-item">FAQ</a> */}

        <div className="nav-item">
          <p className="control">
            <a className="button is-primary is-outlined">
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span>Join Now</span>
            </a>
          </p>
        </div>
      </div>
  </div>
</div>

    );
  }
}

export default Header;
