import {Link} from 'react-router-dom';
import React from 'react';
import ShopPagn from './ShopPagn';

function TableHeader() {
  return (
    <thead>
      <tr>
        <th className="table-header table-container is-success">Shop No.</th>
        <th className="is-success">Innovator Name</th>
        <th className="is-success" colSpan="2"> More</th>
      </tr>
    </thead>
  );
}


function TableBody(props) {
  const innovatorData = props.innovatorData;

  return (
    <tbody>
      {innovatorData.map((row, index) => (
        <tr key={index}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>
            <div className="buttons">
                <Link to="/" className="button is-primary">Edit</Link>
                <Link to="/" className="button is-danger">Delete</Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}



class Table extends React.Component {
  render() {
    const { innovatorData } = this.props;

    return (
      <table className="table container table-container is-primary">
        <TableHeader />
        <TableBody innovatorData={innovatorData} />
        <thead>
      <tr>
        <th colSpan="3"><ShopPagn /></th>
      </tr>
    </thead>
      </table>
    );
  }
}

class InnovatorList extends React.Component {
  render() {
    const innovators = [
    {
        id: "1",
        name: "IRANZI Daniel"
    },
    {
        id: "2",
        name: "IRANZI Daniel"
    },
    {
        id: "3",
        name: "IRADUKUNDA Emmy"
    },
    {
        id: "4",
        name: "Roddy Rich"
    },
];

    return (
      <div className="data-list">
        <div className="container is-fullhd has-text-centered">
          <div className="notification is-black">
            <h2 className="title">Innovator List</h2>
          </div>
        </div><br/>
        <Table innovatorData={innovators} />
      </div>
    );
  }
}
export default InnovatorList;