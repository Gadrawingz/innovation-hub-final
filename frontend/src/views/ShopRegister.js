import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShopify, FaUserLock } from "react-icons/fa";
import Shops from "../apis/shops.json";

import Axios from "axios";

const ShopRegister = (props) => {
  const { shopname, setShopName } = useState("");
  const { shopowner, setShopOwner } = useState("");
  const { description, setDescription } = useState("");
  const saveShopBtn = () => {
    Axios.post("http://localhost:4050/api/saveshop", {
      shopname: shopname,
      shopowner: shopowner,
      description: description,
    }).then(() => {
      console.log("Shop added in database!");
    });
  };

  return (
    <div className="big-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Add Shops</h2>
        </div>
      </div>

      <div className="box is-centered">
        <form method="POST">
          <div className="field is-horizontal is-centered">
            <div className="field-body">
              <div className="field">
                <label className="label">Shop Name</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="shopname"
                    placeholder="Shop Name..."
                    onChange={(event) => {
                      setShopName(event.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <FaShopify />
                  </span>
                </div>
                <p className="help is-success">Provide a precise name!</p>
              </div>

              <div className="field">
                <label className="label">Shop Owner</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="shopowner"
                    placeholder="Shop Owner..."
                    onChange={(event) => {
                      setShopOwner(event.target.value);
                    }}
                  />

                  <span className="icon is-small is-left">
                    <FaUserLock />
                  </span>
                </div>
                <p className="help is-success">Name must be capitalized!</p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal is-centered">
            <div className="field-body">
              <div className="field">
                <label className="label">Shop Description</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-success"
                    type="text"
                    name="description"
                    placeholder="Say something about shop..."
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                  <span className="icon is-small is-left">
                    <FaShopify />
                  </span>
                </div>
                <p className="help is-success">
                  Say about new shop being registered!
                </p>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-primary" onClick={saveShopBtn}>
                Save
              </button>
            </p>
            <p className="control">
              <button className="button is-warning" type="reset">
                Cancel
              </button>
            </p>
            <p className="control">
              <Link to="/shops"  className="button is-success">
                View Shops
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopRegister;
