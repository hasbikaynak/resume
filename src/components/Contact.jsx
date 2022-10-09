import React from "react";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { BsEmojiSmile } from 'react-icons/bs';

const Contact = () => {
  return (
    <div
      className="container-fluid p-0 resume-section p-3 p-lg-5 d-flex flex-column"
      id="contact"
    >
      <h2 className="mb-5">Contact Me</h2>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input id="name" name="name" placeholder="Name" type="name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Text Area
        </Label>
        <Col sm={10}>
          <Input
            id="exampleText"
            name="text"
            placeholder="Text me..."
            type="textarea"
          />
        </Col>
      </FormGroup>
      <FormGroup row tag="fieldset"  >
        <legend className="col-form-label col-sm-10" >Please mark the correct result <BsEmojiSmile/> </legend>
        <Col sm={10}>
          <FormGroup check>
            <Input id="checkbox1" type="checkbox"/>{" "}
            <Label check>
              A{") "} 2 * 2 = 4
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input id="checkbox2" type="checkbox" />{" "}
            <Label check>
            B{") "}2 * 2 = 5
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup className="text-right" check row>
        <Col
          sm={{
            offset: 2,
            size: 10,
          }}
        >
          <Button color="primary">Send Message</Button>
        </Col>
      </FormGroup>
    </div>
  );
};

export default Contact;
