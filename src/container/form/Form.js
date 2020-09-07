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
      isUsernameError: null,
      isPasswordError: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.elements.username.value;
    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;
    let password2 = event.target.elements.password2.value;
    // include API this place and setState POST
    if (username === '' && username.length < 3)
    {
      this.setState({
        profile: [],
        isUsernameError: "username contains atlast 3 charecters",
      });
    }
    else if(password !== password2)
    {
      this.setState({
        profile: [],
        isPasswordError: "Your password doesn't matched"
      })
    } else {
      // this.setState({
      //   profile: [],
      //   ispassworderror: "Your password doesn't matched"
      // })
      this.setState({
        profile: [
          ...this.state.profile,
          {
            username: username,
            email: email,
            password: password,
          },
        ],
        isUsernameError: null,
        isPasswordError: null,
      });
    }

    // let agree = event.target.elements.agree.value;
    // console.log(username, email, password, agree);
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
                <h6 style={{ color: "red" }}>{this.state.isUsernameError}</h6>
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
              </div>
              <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="Password"
                  aria-describedby="passHelp"
                />
                <small id="passHelp" className="form-text text-muted">
                  We'll never share your password with anyone else.
                </small>
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
        <h3 style={{ color: "red" }}>{this.state.isPasswordError}</h3>
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
