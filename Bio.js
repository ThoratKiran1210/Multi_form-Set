import React from "react";
import { Form } from "react-bootstrap";

const Bio = ({ values, handleChange }) => {
  return (
    <div>
      <Form className="mt-5">
        <h4>Enter your Biography</h4>

        <Form.Group className="mt-5">
          <Form.Label>Address1</Form.Label>
          <Form.Control
            defaultValue={values.address1}
            onChange={handleChange("address1")}
            type="text"
            placeholder="address1"
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label>Address2</Form.Label>
          <Form.Control
            defaultValue={values.address2}
            onChange={handleChange("address2")}
            type="text"
            placeholder="address1"
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label>City</Form.Label>
          <Form.Control
            defaultValue={values.city}
            onChange={handleChange("city")}
            type="text"
            placeholder="City"
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label>State</Form.Label>
          <Form.Control
            defaultValue={values.state}
            onChange={handleChange("state")}
            type="text"
            placeholder="State"
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            defaultValue={values.zip}
            onChange={handleChange("zip")}
            type="text"
            placeholder="zip"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Bio;