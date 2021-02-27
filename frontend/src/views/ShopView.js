import { Link } from "react-router-dom";
import React from "react";
import ShopPagn from "./ShopPagn";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th className="table-header table-container is-success">Shop No.</th>
        <th className="is-success">Shop shopname</th>
        <th className="is-success">Shop Owner</th>
        <th className="is-success">Shop Location</th>
        <th className="is-success" colSpan="2">
          {" "}
          More
        </th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const shopData = props.shopData;

  return (
    <tbody>
      {shopData.map((row, index) => (
        <tr key={index}>
          <td>{row.id}</td>
          <td>{row.shopname}</td>
          <td>{row.shoplocation}</td>
          <td>{row.shopOwner}</td>
          <td>
            <div className="buttons">
              <Link to="?editshop" className="button is-primary">
                Edit
              </Link>
              <Link to="/?deleteshop" className="button is-danger">
                Delete
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

class Table extends React.Component {
  render() {
    const { shopData } = this.props;

    return (
      <table className="table container table-container is-primary">
        <TableHeader />
        <TableBody shopData={shopData} />
        <thead>
          <tr>
            <th colSpan="7">
              <ShopPagn />
            </th>
          </tr>
        </thead>
      </table>
    );
  }
}

class ShopView extends React.Component {
  render() {
    const shops = [
      {
        id: "1",
        shopname: "Amizero shop",
        shoplocation: "Kicukiro",
        shopOwner: "Kalisa Didas",
      },
      {
        id: "2",
        shopname: "Dream Shop",
        shoplocation: "Kicukiro",
        shopOwner: "IRADUFASHA Gad",
      },
      {
        id: "3",
        shopname: "Necklaces Store",
        shoplocation: "Kicukiro",
        shopOwner: "IHIMBAZWE Aimee",
      },
      {
        id: "4",
        shopname: "Big house shop",
        shoplocation: "Kicukiro",
        shopOwner: "Niyonshima Samusoni",
      },
    ];

    return (
      <div className="data-list">
        <div className="container is-fullhd has-text-centered">
          <div className="notification is-black">
            <h2 className="title">Shop List</h2>
          </div>
        </div>
        <center>
          <div className="b">
            <Link className="button button center is-link" to="/shops/add">
              Add new shop
            </Link>&nbsp;
            <Link className="button button center is-danger" to="/adminhome">
              Close
            </Link>
          </div>
        </center>
        <Table shopData={shops} />
      </div>
    );
  }
}
export default ShopView;
