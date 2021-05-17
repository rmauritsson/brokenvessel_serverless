import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const StepOne = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="step_one">
      <div className="step_one__header">
        <h4>Personal info</h4>
      </div>
      <div className="step_one__inputs">
        <form noValidate autoComplete="off">
          <div className="step_one_inputs_div">
            <FormControl variant="outlined" className="step_one_inputs_div">
              <TextField
                id="outlined-basic"
                label="First and Last Name"
                variant="outlined"
                name="name"
              />
            </FormControl>
          </div>
          <div className="step_one_inputs_div">
            <FormControl variant="outlined" className="step_one_inputs_div">
              <TextField
                id="outlined-basic"
                label="Alias (How many we call you)"
                variant="outlined"
                name="alias"
              />
            </FormControl>
          </div>
          <div className="step_one_inputs_div">
            <FormControl variant="outlined" className="step_one_inputs_div">
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className="step_one_inputs_div">
            <FormControl variant="outlined" className="step_one_inputs_div">
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className="step_one_inputs_div">
            <FormControl variant="outlined" className="step_one_inputs_div">
              <InputLabel id="demo-simple-select-filled-label">
                How old are you
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={18}>18 years</MenuItem>
                <MenuItem value={19}>19 years</MenuItem>
                <MenuItem value={20}>20 years</MenuItem>
                <MenuItem value={21}>21 years</MenuItem>
                <MenuItem value={22}>22 years</MenuItem>
                <MenuItem value={23}>23 years</MenuItem>
                <MenuItem value={24}>24 years</MenuItem>
                <MenuItem value={25}>25 years</MenuItem>
                <MenuItem value={26}>26 years</MenuItem>
                <MenuItem value={27}>27 years</MenuItem>
                <MenuItem value={28}>28 years</MenuItem>
                <MenuItem value={29}>29 years</MenuItem>
                <MenuItem value={30}>30 years</MenuItem>
                <MenuItem value={31}>31 years</MenuItem>
                <MenuItem value={32}>32 years</MenuItem>
                <MenuItem value={33}>33 years</MenuItem>
                <MenuItem value={34}>34 years</MenuItem>
                <MenuItem value={35}>35 years</MenuItem>
                <MenuItem value={36}>36 years</MenuItem>
                <MenuItem value={37}>37 years</MenuItem>
                <MenuItem value={38}>38 years</MenuItem>
                <MenuItem value={39}>39 years</MenuItem>
                <MenuItem value={40}>40 years</MenuItem>
                <MenuItem value={41}>41 years</MenuItem>
                <MenuItem value={42}>42 years</MenuItem>
                <MenuItem value={43}>43 years</MenuItem>
                <MenuItem value={44}>44 years</MenuItem>
                <MenuItem value={45}>45 years</MenuItem>
                <MenuItem value={46}>46 years</MenuItem>
                <MenuItem value={47}>47 years</MenuItem>
                <MenuItem value={48}>48 years</MenuItem>
                <MenuItem value={49}>49 years</MenuItem>
                <MenuItem value={50}>50 years</MenuItem>
                <MenuItem value={60}>50+ years</MenuItem>
              </Select>
            </FormControl>
          </div>
        </form>
      </div>
    </div>
  );
};

const StepTwo = () => (
  <div className="getstarted_input">
    <div className="getstarted_input__header">
      <h3>How may we call you?</h3>
    </div>
  </div>
);

const StepThree = () => (
  <div className="getstarted_input">
    <div className="getstarted_input__header">
      <h3>How may we call you?</h3>
    </div>
  </div>
);

const GetStarted = () => {
  const [progress, setProgress] = useState(10);
  const [activeSection, setActiveSection] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const sectionsData = [
    {
      title: "Personal Information",
      steps: [<StepOne />],
    },
    {
      title: "What kind of counselling are you looking for",
      steps: [<StepTwo />],
    },
    {
      title: "Review",
      steps: [<StepThree />],
    },
  ];

  const handleNextStep = () => {
    const currentSectionSteps = sectionsData[activeSection]?.steps;

    if (!currentSectionSteps) return;

    if (activeStep < currentSectionSteps.length - 1) {
      setProgress(progress + 30);
      setActiveStep(activeStep + 1);
    } else {
      // Move between sections section
      setProgress(progress + 30);
      setActiveSection(activeSection + 1);
      setActiveStep(0);
    }
  };

  const handlePrevStep = () => {
    // Get current sections steps
    const currentSectionSteps = sectionsData[activeSection]?.steps;

    if (!currentSectionSteps) return;

    const toStep = activeStep - 1;

    if (toStep === -1) {
      setProgress(progress - 30);
      setActiveSection(activeSection - 1);
      setActiveStep(currentSectionSteps.length - 1);
    } else {
      setProgress(progress - 30);
      setActiveStep(activeStep - 1);
    }
  };

  const handleRequest = () => {
    setProgress(progress + 30);
    alert("Information has been received");
  };

  const isFinalStep =
    activeSection === sectionsData.length - 1 &&
    activeStep === sectionsData[activeSection].steps.length - 1;

  const getStepContent = () => {
    return sectionsData[activeSection]?.steps?.[activeStep];
  };

  return (
    <div className="getstarted">
      <div className="getstarted_progress">
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>

      <div className="getstarted_forms">
        <h3>Help us match you to the right volunteer to speak to.</h3>
        {getStepContent()}
      </div>

      <div className="getstarted_buttons">
        {activeStep > 0 || activeSection > 0 ? (
          <button onClick={handlePrevStep}>Prev</button>
        ) : null}

        {!isFinalStep ? <button onClick={handleNextStep}>Next</button> : null}
        {isFinalStep ? (
          <button onClick={handleRequest}>Get Paired</button>
        ) : null}
      </div>
    </div>
  );
};

export default GetStarted;
