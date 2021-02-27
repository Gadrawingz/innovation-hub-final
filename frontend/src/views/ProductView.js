import React from "react";
//import Axios from "axios";
import { Link } from "react-router-dom";

const ProductView = (props) => {
    const { product } = props;
  return (
    <div className="">
      <div className="container">
        <div className="columns" style={{ border: "1px solid green" }}>
          <div
            className="column is-third"
            style={{ borderRight: "2px double violet" }}
          >
            <img src="./images/product-3.jpg" alt="None" />
          </div>
          <div className="column is-fifth">
            <h4 className="title">Product Name</h4>

            <h3 className="subtitle">400 rwf</h3>
            <input type="number" value="1" name="quantity" />

            <div className="content">
              <p>This is some description We added to the products</p>
              <p>
                <Link to="/checkout"
                  className="button is-primary" >
                  Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  );
};

export default ProductView;
