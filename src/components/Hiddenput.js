import React, { useState, useEffect } from "react";
import { TextField, Slide, Fade } from "@mui/material";
import useSound from "use-sound";
import papaerSlide from "../sounds/paper slide.wav";
import accessGranted from "../sounds/access granted.wav";
import grantedBeep from "../sounds/access granted beep.wav";
import accessDenied from "../sounds/acces denied.wav";
import deniedBeep from "../sounds/access denied beep.wav";
import nokiabeep from "../sounds/nokiabeep.wav";

const Hiddenput = (props) => {
  const { display } = props;
  const [fakePassword, setFakePassword] = useState("");
  const [slide] = useSound(papaerSlide);
  const [granted] = useSound(accessGranted, { volume: 0.15 });
  const [denied] = useSound(accessDenied, { volume: 0.15 });
  const [gb] = useSound(grantedBeep, { volume: 0.15 });
  const [db] = useSound(deniedBeep, { volume: 0.15 });
  const [beep] = useSound(nokiabeep);

  useEffect(() => {
    slide();
  }, [display]); // eslint-disable-line

  const handleChange = (event) => {
    beep();
    setFakePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fakePassword === process.env.REACT_APP_PASSWORD) {
      gb();
      granted();
    } else {
      db();
      denied();
    }
  };

  if (!display) return <></>;

  return (
    <>
      <Slide direction="down" in={display} mountOnEnter unmountOnExit>
        <div>
          <Fade in={display} timeout={650}>
            <form noValidate onSubmit={handleSubmit}>
              <TextField id="clearMe" onChange={handleChange} />
            </form>
          </Fade>
        </div>
      </Slide>
    </>
  );
};

export default Hiddenput;
