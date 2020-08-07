import React, { useState } from "react";
import {
  calculateTDEE,
  convertInchesToCM,
  convertPoundsToKG,
} from "../utilities/tdee";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// TODO: check bug with weight
const TDEEForm = () => {
  // Should look into consolidating this.
  // Or split into smaller components!
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [multiplier, setMultipler] = useState("sedentary");
  const [imperialUnits, setImperialUnits] = useState(true);
  const [tdee, setTDEE] = useState("");

  const submitTDEE = () => {
    const fixedWeight = imperialUnits ? convertPoundsToKG(weight) : weight;
    setTDEE(
      calculateTDEE(
        gender,
        height,
        fixedWeight,
        age,
        multiplier
      )
    )
  };

  return (
    <>
      {<h1>{tdee ? parseInt(tdee, 10) + " Calories" : "TDEE Calculator"}</h1>}
      <p className="tdee-explanation">Total Daily Energy Expenditure (TDEE) is the number of calories you burn a day. Eating roughly this amount of calories every day will maintain your current weight. By eating less calories than your TDEE you can lose weight. Eating 500 calories under your TDEE a day will allow you to lose weight at a rate of roughly 1 pound per week.</p>
      <Form className="tdee-form">
        <Height
          height={height}
          setHeight={setHeight}
          imperialUnits={imperialUnits}
        />
        <FormGroup>
          <Label htmlFor="weight-input">
            Weight {imperialUnits ? "(lbs)" : "(kg)"}
          </Label>
          <Input
            type="number"
            name="weight-input"
            id="weight-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={imperialUnits ? "175" : "80"}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age-input">Age</Label>
          <Input
            type="number"
            name="age-input"
            id="age-input"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="activity-level">What is your activity level?</Label>
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
            submitTDEE()
          }
        >
          Calculate
        </Button>
      </Form>
    </>
  );
};

const Height = ({ imperialUnits, height, setHeight }) => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const getValueAsInt = (evt) => {
    return parseInt(evt.target.value, 10);
  };

  const handleFeet = (evt) => {
    const feet = getValueAsInt(evt);
    setFeet(feet ? feet : "");
    handleImperialHeight(feet, "feet");
  };

  const handleInches = (evt) => {
    const inches = getValueAsInt(evt);
    setInches(inches ? inches : "");
    handleImperialHeight(inches, "inches");
  };

  const handleImperialHeight = (amount, unit) => {
    // TODO: reading state too fast after setting it. refactor this away
    let imperialHeight;
    if (unit === "inches") {
      imperialHeight = (feet * 12) + amount;
    } else {
      imperialHeight = (amount * 12) + inches;
    }

    setHeight(convertInchesToCM(imperialHeight));
  };

  if (imperialUnits) {
    return (
      <div className="row imperial-height">
        <FormGroup className="col-md-6 height-ft">
          <Label htmlFor="height-input-ft">Height (ft)</Label>
          <Input
            type="number"
            name="height-input-ft"
            id="height-input-ft"
            value={feet}
            onChange={(e) => handleFeet(e)}
            placeholder="5"
          />
        </FormGroup>
        <FormGroup className="col-md-6 height-in">
          <Label htmlFor="height-input-in">Height (in)</Label>
          <Input
            type="number"
            name="height-input-in"
            id="height-input-in"
            value={inches}
            onChange={(e) => handleInches(e)}
            placeholder="10"
          />
        </FormGroup>
      </div>
    );
  }
  return (
    <FormGroup>
      <Label htmlFor="height-input-cm">Height (cm)</Label>
      <Input
        type="number"
        name="height-input-cm"
        id="height-input-cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="180"
      />
    </FormGroup>
  );
};

export default TDEEForm;
