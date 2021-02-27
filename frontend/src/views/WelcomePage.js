import React from "react";
import {Link} from "react-router-dom";

const WelcomePage = (props) => {
  return (
    <section className="hero is-light is-half">
      <div className="hero-head">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Welcome to Innovation hub shopping store!</p>
            <p className="subtitle">
              For Sharing innovations, creativities with Rwandans!
              <br />
              <br />
              <br />
              <br />
              Innovation categories are listed here!
              <br />
              <br />
            </p>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="is-active">
                  <Link
                    to="/"
                    className="button button-outline is-success has-text-white"
                  >
                    Arts
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;
                <li>
                  <Link
                    to="/"
                    className="button button-outline is-success has-text-white"
                  >
                    Crafts
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;
                <li>
                  <Link
                    to="/"
                    className="button button-outline is-success has-text-white"
                  >
                    Clothes
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;
                <li>
                  <Link
                    to="/"
                    className="button button-outline is-success has-text-white"
                  >
                    Electronics
                  </Link>
                </li>
                &nbsp;&nbsp;&nbsp;
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
