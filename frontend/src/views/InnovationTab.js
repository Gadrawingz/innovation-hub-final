import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBreadSlice, FaFile, FaPalette, FaShoePrints, FaToolbox, FaTools } from "react-icons/fa";
import {} from "react-icons/di";
import {} from "react-icons/ai";


const InnovationTab = (props) => {
  return (
    <div className="tabs is-toggle is-fullwidth">
      <ul>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <FaFile/>
            </span>
            <span>Clothes</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <FaToolbox />
            </span>
            <span>Furniture</span>
          </a>
        </li>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <FaTools />
            </span>
            <span>Tools</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <FaBreadSlice />
            </span>
            <span>Jewerly</span>
          </a>
        </li>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <FaShoePrints />
            </span>
            <span>Shoes</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <FaPalette aria-hidden="true" />
            </span>
            <span>Foods & Drinks</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InnovationTab;
