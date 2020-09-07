import React, { Component } from 'react'


export default class List extends Component {
  // using componentDidMount you can get value from API and Assign the  tbody
  render() {
    return (
      <div className="cointainer">
        <div className="row">
          <div className="col-12 col-md-9 mt-5 table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">May you contact?</th>
                  <th scope="col">Contact Type</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              <tbody>
                {this.props.profile.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row"></th>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.telnum}</td>
                      <td>{item.email}</td>
                      <td>{item.agree}</td>
                      <td>{item.contactType}</td>
                      <td>{item.message}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
