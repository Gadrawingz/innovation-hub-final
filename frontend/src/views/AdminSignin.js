import React from "react";
import { Link } from "react-router-dom";

const AdminSignin = (props) => {
  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Admin Login</h2>
        </div>
      </div>

      <form>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <br />
            <br />

            <div className="field">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email..."
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password..."
              />
            </div>

            <div className="field is-clearfix">
              <Link
                to="adminhome"
                className="button is-link is-pulled-left"
              >
                Login
              </Link>
              <button
                className="button is-danger is-outlined is-pulled-right"
                type="reset"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminSignin;
