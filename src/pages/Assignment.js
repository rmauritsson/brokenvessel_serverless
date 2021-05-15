import React, { useState } from "react";
import InfoGraphic from "../img/info_graphic_1.svg";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Assignment = () => {
  const [consent, setConsent] = useState(false);

  const handleChange = (event) => setConsent(!consent);

  return (
    <div className="assignment">
      <div className="assignment_left">
        <div className="assignment_left__content">
          <img src={InfoGraphic} alt="info Graphics" />
          <h2>Talk to a Volunteer</h2>

          <p>
            Broken Vessel has no tolorance on cyber bullying, sexual
            harrasement, inapropriate language; Whereas the volunteers have been
            made aware of this, we can not 100% guarantee that it shall not
            happen, Incase you are a victim of any of the listed circumstances,
            please use the button below to get intouch with the admin at Broken
            Vessel
          </p>
          <p>
            Please note, Volunteers are not professionally licensed personnel,
            but good hearted people who have gone through similiar circumstances
            and would wish to walk with you this journey. Incase you would
            prefer a professional therapist at a cost, please get intouch with
            us.
          </p>
          <FormControlLabel
            control={
              <Checkbox
                checked={consent}
                onChange={handleChange}
                name="consent"
                color="#ffffff"
              />
            }
            label="I agree to the T&Cs of BV"
          />
        </div>
      </div>
      <div className="assignment_right">Right</div>
    </div>
  );
};

export default Assignment;
