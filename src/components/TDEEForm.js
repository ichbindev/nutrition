import React, { useState } from "react";
import { calculateTDEE, convertInchesToCM } from "../utilities/tdee";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TDEEForm = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(30);
  const [multiplier, setMultipler] = useState("sedentary");
  const [imperialUnits, setImperialUnits] = useState(false);
  const [tdee, setTDEE] = useState(null);
  return (
    <>
      {<h1>{tdee ? tdee + " Calories" : "TDEE Calculator"}</h1>}
      <Form className="tdee-form">
        <Height
          height={height}
          setHeight={setHeight}
          imperialUnits={imperialUnits}
        />
        <FormGroup>
          <Label for="weight-input">
            Weight {imperialUnits ? "(lbs)" : "(kg)"}
          </Label>
          <Input
            type="text"
            name="weight-input"
            id="weight-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age-input">Age</Label>
          <Input
            type="text"
            name="age-input"
            id="age-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="activity-level">What is your activity level?</Label>
          <Input
            type="select"
            name="activity-level"
            id="activity-level"
            value={multiplier}
            onChange={(e) => setMultipler(e.target.value)}
          >
            <option value="sedentary">
              Sedentary - Office job, little to no exercise
            </option>
            <option value="light">
              Light - Active job or exercise twice a week
            </option>
            <option value="moderate">
              Moderate - Demanding physical job or work out 3-4 times a week
            </option>
            <option value="very">
              Very - Work out 5 times a week or very physical job and exercise
            </option>
            <option value="extremely">
              Extremely - Work out multiple times per day
            </option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="gender"
                checked={gender === "male"}
                onChange={(e) => setGender("male")}
              />{" "}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="gender"
                checked={gender === "female"}
                onChange={(e) => setGender("female")}
              />{" "}
              Female
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Unit Type</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="imperial"
                checked={imperialUnits}
                onChange={(e) => setImperialUnits(true)}
              />{" "}
              Imperial
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="imperial"
                checked={!imperialUnits}
                onChange={(e) => setImperialUnits(false)}
              />{" "}
              Metric
            </Label>
          </FormGroup>
        </FormGroup>
        <Button
          onClick={() =>
            setTDEE(
              calculateTDEE(
                gender,
                height,
                weight,
                age,
                multiplier,
                imperialUnits
              )
            )
          }
        >
          Calculate
        </Button>
      </Form>
    </>
  );
};

const Height = ({ imperialUnits, height, setHeight }) => {
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);

  const getValueAsInt = (evt) => {
    if (evt.target.value === "") {
      evt.target.value = 0;
    }
    return parseInt(evt.target.value, 10);
  };

  const handleFeet = (evt) => {
    const feet = getValueAsInt(evt);
    setFeet(feet);
    handleImperialHeight();
  };

  const handleInches = (evt) => {
    const inches = getValueAsInt(evt);
    setInches(inches);
    handleImperialHeight();
  };

  const handleImperialHeight = () => {
    // multiply feet by 12
    // add inches
    const imperialHeight = feet * 12 + inches;
    setHeight(imperialHeight);
  };

  if (imperialUnits) {
    return (
      <div className="row imperial-height">
        <FormGroup className="col-md-6 height-ft">
          <Label for="height-input-ft">Height (ft)</Label>
          <Input
            type="text"
            name="height-input-ft"
            id="height-input-ft"
            value={feet}
            onChange={(e) => handleFeet(e)}
          />
        </FormGroup>
        <FormGroup className="col-md-6 height-in">
          <Label for="height-input-in">Height (in)</Label>
          <Input
            type="text"
            name="height-input-in"
            id="height-input-in"
            value={inches}
            onChange={(e) => handleInches(e)}
          />
        </FormGroup>
      </div>
    );
  }
  return (
    <FormGroup>
      <Label for="height-input-cm">Height (cm)</Label>
      <Input
        type="text"
        name="height-input-cm"
        id="height-input-cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </FormGroup>
  );
};

export default TDEEForm;
