// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="www.baidu.com">
          Logo
        </a>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#myCarousel">HOME</a>
            </li>
            <li>
              <a href="#band">BAND</a>
            </li>
            <li>
              <a href="#tour">TOUR</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="www.baidu.com">
                MORE<span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="www.baidu.com">Merchandise</a>
                </li>
                <li>
                  <a href="www.baidu.com">Extras</a>
                </li>
                <li>
                  <a href="www.baidu.com">Media</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="www.baidu.com">
                <span className="glyphicon glyphicon-search"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
