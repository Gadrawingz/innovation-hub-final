import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.routerRef = React.createRef();
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span className="button is-success" style={{marginTop: "5px", marginLeft: "5px"}}>Innovation Hub</span>
        </Link>
        
          <label
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBarMain"
            onClick={(e) => {
              e.preventDefault();
              this.setState({ showMenu: !this.state.showMenu });
            }}
          ></label>
        </div>

        <div
          className={`navbar-menu ${this.state.showMenu ? "is-active" : ""}`}
        ></div>

        <div id="navBarMain" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/innovations" className="navbar-item">
              Innovations
            </Link>

            <Link to="/help" className="navbar-item">
              Help
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/adminsignup" className="button is-link">
                  <strong>Sign up</strong>
                </Link>

                <Link to="/adminsignin" className="button is-dark">
                  Sign in
                </Link>

                <Link to="/cart" className="button is-link">
                  My Cart 
                  <span
                    className="tag is-dark"
                    style={{ marginLeft: "5px" }}
                  >
                    5
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainHeader;
