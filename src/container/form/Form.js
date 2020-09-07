import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import List from "../../component/list/List";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   username: "",
    //   email: "",
    //   password: null,
    // };
    this.state = {
      profile: [],
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    console.log(target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(value);
    const name = target.name;

    // this.setState({
    //   profile: [
    //     ...this.state.profile,
    //     {
    //       [name]: value,
    //     },
    //   ],
    // });

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
    this.setState({
      profile: [
        ...this.state.profile,
        {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          telnum: this.state.telnum,
          email: this.state.email,
          agree: this.state.agree,
          contactType: this.state.contactType,
          message: this.state.message,
        },
      ],
    });
  };

  validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 30)
            errors.firstname = 'First Name should be <= 30 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 30)
            errors.lastname = 'Last Name should be <= 30 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );
    console.log('dsd' + this.state.agree)
    return (
      <div className="container">
        <div className="col-12 col-md-9 mt-5">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  value={this.state.firstname}
                  valid={errors.firstname === ""}
                  invalid={errors.firstname !== ""}
                  onBlur={this.handleBlur("firstname")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.firstname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  value={this.state.lastname}
                  valid={errors.lastname === ""}
                  invalid={errors.lastname !== ""}
                  onBlur={this.handleBlur("lastname")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.lastname}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. number"
                  value={this.state.telnum}
                  valid={errors.telnum === ""}
                  invalid={errors.telnum !== ""}
                  onBlur={this.handleBlur("telnum")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.telnum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  valid={errors.email === ""}
                  invalid={errors.email !== ""}
                  onBlur={this.handleBlur("email")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  value={this.state.contactType}
                  onChange={this.handleInputChange}
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                {errors.firstname === "" &&
                errors.lastname === "" &&
                errors.email === "" &&
                errors.telnum === "" ? (
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                ) : (
                  <Button disabled type="submit" color="primary">
                    Send Feedback
                  </Button>
                )}
                {/* <Button type="submit" color="primary">
                  Send Feedback
                </Button> */}
              </Col>
            </FormGroup>
          </Form>
        </div>
        
        {/* comment out this line when show your value */}
        <List profile={this.state.profile} />
      </div>
    );
  }
}
