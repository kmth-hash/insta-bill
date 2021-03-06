/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Receipt} from 'react-bootstrap-icons';

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <a className="navbar-brand" style={{height : '30px'}} href="/">
        <Receipt style={{marginRight : '5px'}}/>Insta Bill
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/new">
              New Note 
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/all">
              All Notes
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Extras
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
