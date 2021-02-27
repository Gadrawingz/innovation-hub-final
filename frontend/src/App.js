import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.css";
import "./additional.css";

import Context from "./Context";
import MainFooter from "./views/MainFooter";
import MainHeader from "./views/MainHeader";
import Innovations from "./views/Innovations";
import AdminSignup from "./views/AdminSignup";
import AdminSignin from "./views/AdminSignin";
import WelcomePage from "./views/WelcomePage";
import AddInnovation from "./views/AddInnovation";
import CartView from "./views/CartView";
import ProductView from "./views/ProductView";
import CartItem from "./views/CartItem";
import Checkout from "./views/Checkout";
import HelpView from "./views/HelpView";
import AdminHome from "./views/AdminHome";
import ShopView from "./views/ShopView";
import InnovatorView from "./views/InnovatorView";
import InnovatorList from "./views/InnovatorList";
import ShopRegister from "./views/ShopRegister";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.routerRef = React.createRef();
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          login: this.login,
          addInnovation: this.addInnovation,
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            {/* Header Component */}
            <MainHeader />

            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/innovations" component={Innovations} />
              <Route exact path="/adminsignup" component={AdminSignup} />
              <Route exact path="/adminsignin" component={AdminSignin} />
              <Route exact path="/newinnovation" component={AddInnovation} />
              <Route exact path="/cart" component={CartView} />
              <Route exact path="/cartitem" component={CartItem} />
              <Route exact path="/productview" component={ProductView} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/help" component={HelpView} />
              <Route exact path="/adminhome" component={AdminHome} />
              <Route exact path="/shops" component={ShopView} />
              <Route exact path="/shops/add" component={ShopRegister} />
              <Route exact path="/innovators" component={InnovatorView} />
              <Route exact path="/innovators/innovatorlist" component={InnovatorList} />
            </Switch>

            {/* Footer Component */}
            <MainFooter />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
