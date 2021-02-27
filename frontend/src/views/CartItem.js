import React from "react";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  return (
    <div class="container">
    <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">Cart Items!</h2>
        </div>
      </div>
      <div class="column is-primary center">
        <div className="column">
          <h1 className="title">Product Name: Backpack</h1>
        </div>

        <div className="column">
          <h1 className="title">Price: 400rwf</h1>
        </div>

        <div className="column">
          <h1 className="title">Quantity: 3</h1>
        </div>

        <div className="column">
          <h1 className="title">Total: 1200rwf</h1>
        </div>

        <div className="column">
          <p>
            <Link to="/checkout" className="button is-primary">Checkout</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
