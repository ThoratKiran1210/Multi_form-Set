import React, { useState } from "react";
import Bio from "./components/Bio";
import Confirmation from "./components/Confirmation";
import UserDetails from "./components/UserDetails";
import WelcomePage from "./components/WelcomePage";
import { Button } from "react-bootstrap";

const UserForm = () => {
  //Steps
  const [activeStep, setActiveStep] = useState(0);

  const getSteps = () => {
    return ["WelcomePage", "UserDetails", "Bio", "Confirmation"];
  };

  const steps = getSteps();

  //State variables
  const [multiFormValues, setMultiFormValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    adreess1: "",
    adreess2: "",
    zip: "",
  });

  //Navigates to the next page
  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1);
  };
  //Navigates to the Previous page
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };

  //Handle form value state on change
  const handleChange = (input) => (e) => {
    setMultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };
  return (
    <div>
      {activeStep === 0 && <WelcomePage handleChange={handleChange} />}
      {activeStep === 1 && (
        <UserDetails values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Bio values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 3 && (
        <Confirmation values={multiFormValues} handleChange={handleChange} />
      )}

      <Button
        disabled={activeStep === 0}
        className="mr-5"
        onClick={handleBack}
        style={activeStep === 3 ? { display: "none" } : {}}
      >
        Back
      </Button>

      <Button
        className="ml-5"
        variant="contained"
        onClick={handleNext}
        style={activeStep === 3 ? { display: "none" } : {}}
      >
        {}
        {activeStep === steps.length - 2 ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default UserForm;
