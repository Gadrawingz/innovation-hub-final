import React from "react";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Checkout | Final Step!</h2>
        </div>
      </div>

      <form>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <br />
            <br />

            <div className="field">
              <label className="label">Names</label>
              <input
                className="input"
                type="text"
                name="names"
                autoComplete="off"
                placeholder="Email..."
              />
            </div>

            <div className="field">
              <label className="label">Telephone</label>
              <input
                className="input"
                type="tel"
                name="email"
                placeholder="Email..."
              />
            </div>

            <div className="field">
              <label className="label">Location</label>
              <input
                className="input"
                type="tel"
                name="email"
                placeholder="Location..."
              />
            </div>



            

<div className="field has-addons has-addons-centered">
  <p className="control">
    <span className="select">
      <select>
        <option>Mobile Money</option>
        <option>Tigo Cash</option>
        <option>Equity Bank</option>
      </select>
    </span>
  </p>
  <p className="control">
    <input className="input" type="text" placeholder="Amount of money"/>
  </p>
</div>
            <div className="field is-clearfix">
              <button className="button is-link is-pulled-left">
                Complete
              </button>
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

export default Checkout;
