import React, { Component } from "react";
// import { Link } from "react-router-dom";

class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.routerRef = React.createRef();
  }

  render() {
    return (
      <footer
        class="footer"
        style={{ padding: "10px", borderRadius: "4px", background: "#FFF!important", marginTop: "50px", borderTop: "1px solid green" }}
      >
        <div class="content has-text-centered">
          <p>
            Innovation hub&nbsp;&copy;2021 All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default MainFooter;
