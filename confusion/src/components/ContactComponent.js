import React, { Component } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log(`Current state is: ${JSON.stringify(values)}`);
        alert(`Current state is: ${JSON.stringify(values)}`);
    }



    render() {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>

                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
                            <i className="fa fa-phone" />: +852 1234 5678<br />
                            <i className="fa fa-fax" />: +852 8765 4321<br />
                            <i className="fa fa-envelope" />:{" "}
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>

                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>

                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a
                                role="button"
                                className="btn btn-primary"
                                href="tel:+85212345678"
                            >
                                <i className="fa fa-phone" /> Call
              </a>
                            <a role="button" className="btn btn-info">
                                <i className="fa fa-skype" /> Skype
              </a>
                            <a
                                role="button"
                                className="btn btn-success"
                                href="mailto:confusion@food.net"
                            >
                                <i className="fa fa-envelope-o" /> Email
              </a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>
                                    First Name
                                 </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".firstname"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="from-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater than 2",
                                            maxLength: "Must be 15 character or less"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>
                                    Last Name
                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".lastname"
                                        className="from-control"
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater than 2",
                                            maxLength: "Must be 15 character or less"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>
                                    Contact Tel.
                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".telnum"
                                        className="from-control"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="Tel. Number"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "Must be greater than 2",
                                            maxLength: "Must be 15 numbers or less",
                                            isNumber: "Must be a number"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>
                                    Email
                </Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".email"
                                        className="from-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            validEmail: "Invalid email address"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="from-check-input"
                                            />{" "}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>

                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        className="from-control"
                                        type="select"
                                        name="contactType"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>
                                    Your Feedback
                </Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        type="textarea"
                                        className="from-control"
                                        id="message"
                                        name="message"
                                        rows="12"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                  </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;