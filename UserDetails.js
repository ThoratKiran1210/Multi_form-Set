import React from "react";
import { Form } from "react-bootstrap";

const UserDetails = ({ values, handleChange }) => {
  // Function to handle phone input change with validation
  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    const phoneRegex = /^[0-9]{0,10}$/; // Regex for 0 to 10 digits
    if (phoneRegex.test(phone)) {
      handleChange("phone", phone);
    }
  };

   return (
     <div>
       <Form className="mt-5">
         <h4>Personal Details!!</h4>

         <Form.Group className="mt-5">
           <Form.Label>Name</Form.Label>
           <Form.Control
             defaultValue={values.fullname}
             onChange={handleChange("fullname")}
             type="text"
             placeholder="full name"
           />
         </Form.Group>

         <Form.Group className="mt-5">
           <Form.Label>Email</Form.Label>
           <Form.Control
             defaultValue={values.email}
             onChange={handleChange("email")}
             type="email"
             placeholder="email"
           />
         </Form.Group>

         <Form.Group className="mt-5">
           <Form.Label>Phone</Form.Label>
           <Form.Control
             defaultValue={values.phone}
             onChange={handleChange("phone")}
             type="phone"
             placeholder="phone"
           />
         </Form.Group>
       </Form>
     </div>
   );
};

export default UserDetails;
