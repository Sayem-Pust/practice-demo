import React, { Component } from "react";
import List from "../../component/list/List";

export default class Form extends Component {
  constructor() {
    super();
    // this.state = {
    //   username: "",
    //   email: "",
    //   password: null,
    // };
    this.state = {
      profile: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;
    let password2 = event.target.elements.password2.value;
    // include API this place and setState POST
    if(password === password2)
    {
      this.setState({
        profile: [
          ...this.state.profile,
          {
            username: username,
            email: email,
            password: password,
          },
        ],
      });
    } else {
      this.setState({
        profile: []
      })
    }

    let agree = event.target.elements.agree.value;
    console.log(username, email, password, agree);
    // this.setState({
    //   username: username,
    //   email: email,
    //   password: password,
    // });

    
  };

  // handleChange(e) {
  //   let isChecked = e.target.checked;
  //   console.log(isChecked)
  //   if (isChecked === false)
  //   {
  //     this.setState({
  //       profile: []
  //     })
  //   }
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3 mt-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Password2">Repeat Password</label>
                <input
                  type="password"
                  name="password2"
                  className="form-control"
                  id="Password2"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="agree"
                  // onChange={(e) => this.handleChange(e)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* comment out this line when show your value */}
        <List profile={this.state.profile} />

        {/* {
          this.state.profile.map(item => {
            return <List username={item.username} />
          })
        } */}
      </div>
    );
  }
}
