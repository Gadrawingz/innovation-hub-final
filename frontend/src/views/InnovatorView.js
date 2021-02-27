import React from "react";
// import { Link } from "react-router-dom";

const InnovatorView = (props) => {
  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">View Innovators!</h2>
        </div>
      </div>

      <form>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </div>

            <div className="field is-clearfix">
              <button className="button is-secondary is-outlined is-pulled-right">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InnovatorView;
