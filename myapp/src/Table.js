import React from 'react';
import './Table.css';


class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
        <table border="1" id="customers" className="fl-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {items.map((item,index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.address}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
  }
}

export default Table;