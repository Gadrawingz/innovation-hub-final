import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Axios from "axios";
import { FaMailBulk, FaRegUser, FaUserLock } from "react-icons/fa";

const AdminSignup = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [telnumber, setTelNumber] = useState(0);
  const [password, setPassword] = useState("");

  const submitAdmin = () => {
    Axios.post("http://localhost:4050/api/insert", {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      telnumber: telnumber,
      password: password
    }).then(() => {
      console.log("SUCCESS!");
    });
  };


  const [adminList, setAdminList] = useState([]);

  const getAdmins = () => {
    Axios.get("http://localhost:4050/api/admins").then((response)=> {
      console.log(response);
    });
  }

  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Customer Registration</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="box is-centered">
        <form method="POST">
          <div className="field is-horizontal is-centered">
            <div className="field-body">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="firstname"
                    placeholder="First Name..."
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <FaRegUser />
                  </span>
                </div>
                <p className="help is-success">Firstname must be capitalized!</p>
              </div>

              <div className="field">
                <label className="label">Lastname</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="lastname"
                    placeholder="Last Name..."
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />

                  <span className="icon is-small is-left">
                    <FaRegUser />
                  </span>
                </div>
                <p className="help is-success">Lastname must be capitalized!</p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal is-centered">
            <div className="field-body">
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="username"
                    placeholder="Username..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <FaRegUser />
                  </span>
                </div>
                <p className="help is-success">Username should be short!</p>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="password"
                    name="password"
                    placeholder="Password..."
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />

                  <span className="icon is-small is-left">
                    <FaUserLock />
                  </span>
                </div>
                <p className="help is-success">
                  Password should be over 5 char long!
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field is-expanded">
                <label className="label">Email address</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <FaMailBulk />
                  </span>
                </div>
                <p class="help is-success">E -mail must be in lower-case!</p>
              </div>

              <div className="field is-expanded">
                <label className="label">Phone Number</label>
                <div className="field has-addons">
                  <p className="control">
                    <b className="button is-static">+25</b>
                  </p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="tel"
                      placeholder="Your phone number"
                      name="telnumber"
                      onChange={(event) => {
                        setTelNumber(event.target.value);
                      }}
                    ></input>
                  </p>
                </div>
                <p className="help is-success">Hint: 078....</p>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-primary" onClick={submitAdmin}>
                Register
              </button>
            </p>
            <p className="control">
              <button className="button is-warning" type="reset">
                Cancel
              </button>
            </p>
          </div>
          

          {adminList.map((val, key) => {
            return (
              <div className="admin">
                <h1>{val.firstname}</h1>
                <h1>{val.lastname}</h1>
                <h1>{val.email}</h1>
                <h1>{val.password}</h1>
                <h1>{val.username}</h1>
              </div>
            )
          })}


        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
