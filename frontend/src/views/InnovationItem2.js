import React from "react";
import { Link } from "react-router-dom";
import Innovations from "../apis/innovations.json";

const InnovationItem2 = (props) => {
  return (
    <div className="products-container">
      <main>
        <div>
          <ul className="products">
            {Innovations.map((innovation, key) => {
              return (
                <li>
                  <div className="product">
                    <Link to="/{innovation.title}">
                      <img
                        src="../images/{innovation.image}.jpg"
                        alt={innovation.title}
                      />
                    </Link>
                    <div className="product-name">
                      <Link to="/" href="/#/product/{innovation._id}">
                        {innovation.title}
                      </Link>
                    </div>
                    <div className="product-name">{innovation.description}</div>

                    <div className="product-brand">{innovation.category}</div>
                    <div className="product-price">{innovation.price} rwf</div>
                    <Link to="/cart" className="button is-primary">
                      Add to cart
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default InnovationItem2;
