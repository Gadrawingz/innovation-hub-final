import React from "react";
import AdminHome from "./AdminHome";
import InnovationItem from "./InnovationItem";
import InnovationTab from "./InnovationTab";
import InnovPagination from "./InnovPagination";

const innovations = (props) => {
  return (
    <div className="">
      <div class="innovation-container">
        <div class="container is-fullhd has-text-centered">
          <div class="notification is-primary">
            <h2 className="title">Innovation Store</h2>
          </div>
        </div>
        {/*Innovation tab*/}
        <InnovationTab />
        <InnovationItem />
        <InnovPagination />
      </div>
    </div>
  );
};

export default innovations;
