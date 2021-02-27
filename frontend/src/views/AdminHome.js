import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {} from "react-icons/fa";
import {
  AiFillAlipaySquare,
  AiFillFileImage,
  AiFillShop,
  AiOutlineWallet,
} from "react-icons/ai";

const AdminHome = (props) => {
  return (
    <div className="admin-dash-gad-defined">
      <div class="tabs box is-centered is-boxed">
        <ul>
          <li class="is-active">
            <Link to="/shops">
              <span class="icon is-small">
                <AiFillFileImage aria-hidden="true" />
              </span>
              <span>Manage Shops</span>
            </Link>
          </li>
          <li>
            <Link to="/innovators">
              <span class="icon is-small">
                <AiOutlineWallet aria-hidden="true" />
              </span>
              <span>Manage Innovators</span>
            </Link>
          </li>
          <li>
            <Link to="/customers">
              <span class="icon is-small">
                <AiOutlineWallet aria-hidden="true" />
              </span>
              <span>Manage Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/sales">
              <span class="icon is-small">
                <AiFillAlipaySquare aria-hidden="true" />
              </span>
              <span>View Sales</span>
            </Link>
          </li>

          <li>
            <Link to="/transactions">
              <span class="icon is-small">
                <AiFillAlipaySquare aria-hidden="true" />
              </span>
              <span>View Transactions</span>
            </Link>
          </li>
        </ul>
      </div>

      <section className="hero is-light is-halfheight">
        <div className="hero-head">
          <div className="hero-body">
            <div className="container has-text-centered">
              <br />
              <br />
              <br />
              Admin Home
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
