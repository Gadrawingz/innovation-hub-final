import React from "react";
// import { Link } from "react-router-dom";

const LoginView = (props) => {
  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Login here</h2>
        </div>
      </div>

      <form>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>

            <div className="field is-clearfix">
              <button className="button is-secondary is-outlined is-pulled-right">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
