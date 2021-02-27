import React from "react";
import CartItem from "./CartItem";
import ProductView from "./ProductView";
import { Link } from "react-router-dom";

const CartView = (props) => {
  return (
    <div class="login-container">
      <div class="container is-fullhd has-text-centered">
        <div class="notification is-primary">
          <h2 className="title">My shopping cart</h2>
        </div>
      </div>

      <form>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <br />
            <br />
            <ProductView/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartView;
