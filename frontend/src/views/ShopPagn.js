// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {} from "react-icons/fa";
import {} from "react-icons/ai";

const ShopPagn = (props) => {
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <Link to="/" className="pagination-previous button is-success">
        Previous
      </Link>
      <Link to="/" className="pagination-next button is-success">
        Next page
      </Link>
      <ul className="pagination-list">
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <Link to="/" className="pagination-link" aria-label="Goto page 45">
            1
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="pagination-link is-current"
            aria-label="Page 2"
            aria-current="page"
          >
            2
          </Link>
        </li>
        <li>
          <Link className="pagination-link" aria-label="Goto page 3">
            3
          </Link>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
      </ul>
    </nav>
  );
};

export default ShopPagn;
