import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { db } from "./config/Firebase"; // Import db from Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Import collection and addDoc from Firestore


const Confirm = ({ values }) => {
  const { fullname, email, phone, address1, address2, city, state, zip } =
    values;

  useEffect(() => {
    const submitData = async () => {
      try {
        const docRef = await addDoc(collection(db, "multiFormData"), {
          fullname: fullname,
          email: email,
          phone: phone,
          city: city,
          state: state,
          address1: address1,
          address2: address2,
          zip: zip,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (err) {
        console.error("Error adding document: ", err);
      }
    };

    submitData();
  }, [fullname, email, phone, address1, address2, city, state, zip]);

  return (
    <div>
      <h4>Submitted Successfully!! </h4>
      <ListGroup style={{ maxWidth: "600px", margin: "auto" }}>
        <ListGroup.Item variant="dark">NAME: {fullname} </ListGroup.Item>
        <ListGroup.Item variant="dark">EMAIL: {email}</ListGroup.Item>
        <ListGroup.Item variant="dark">PHONE: {phone} </ListGroup.Item>
        <ListGroup.Item variant="dark">CITY: {city}</ListGroup.Item>
        <ListGroup.Item variant="dark">STATE: {state}</ListGroup.Item>
        <ListGroup.Item variant="dark">ADDRESS1: {address1} </ListGroup.Item>
        <ListGroup.Item variant="dark">ADDRESS2: {address2} </ListGroup.Item>
        <ListGroup.Item variant="dark">ZIP: {zip} </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Confirm;
