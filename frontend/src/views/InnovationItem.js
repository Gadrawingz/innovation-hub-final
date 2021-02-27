import React from "react";
import { Link } from "react-router-dom";
import Innovations from "../apis/innovations.json";

const InnovationItem = (props) => {
  const { innovation } = props;
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
                      <img src={innovation.image} alt={innovation.title} />
                    </Link>
                    <div className="product-name">
                      <Link
                        to="/{innovation._id}"
                        href="/#/product/{innovation._id}"
                      >
                        {innovation.title}
                      </Link>
                    </div>
                    <div className="product-name">{innovation.description}</div>
                    <div className="product-brand">{innovation.category}</div>
                    <div className="product-price">{innovation.price} rwf</div>
                    <button to="/cart" className="button is-primary" onClick={()=> props.addToCart({_id:innovation.name, innovation, price:1})}>
                      Add to cart
                    </button>
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

export default InnovationItem;
