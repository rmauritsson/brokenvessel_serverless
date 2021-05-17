import React, { useState } from "react";
import InfoGraphic from "../img/info_graphic_1.svg";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import hands from "../img/10.png";
import GetStarted from "../components/getStarted";

const WaitingTime = () => {
  return (
    <div className="waiting_time">
      <div className="waiting_time__desc">
        <h1>Just a reminder!</h1>
        <p>
          Some of the most comforting words in the universe are ‘me too.’ That
          moment when you find out that your struggle is also someone else’s
          struggle, that you’re not alone, and that others have been down the
          same road.
        </p>

        <p>We are proud of you for having the courage to reach out.</p>

        <h5>
          Please accept the Terms and Conditions in the Checkbox on your left to
          get started
        </h5>
      </div>
      <div className="waiting_time__img">
        <img src={hands} alt="" />
      </div>
    </div>
  );
};

const Assignment = () => {
  const [consent, setConsent] = useState(false);

  const handleChange = () => setConsent(!consent);

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
              />
            }
            label="I agree to the T&Cs of BV"
          />
        </div>
      </div>
      <div className="assignment_right">
        {consent ? <GetStarted /> : <WaitingTime />}
      </div>
    </div>
  );
};

export default Assignment;
