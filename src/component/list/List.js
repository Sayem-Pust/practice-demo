import React, { Component } from 'react'


export default class List extends Component {
  // using componentDidMount you can get value from API and Assign the  tbody
  render() {
    return (
      <div className="cointainer">
        <div className="row">
          <div className="col-md-6 offset-3 mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {this.props.profile.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row"></th>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
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
