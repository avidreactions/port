import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import useSound from "use-sound";
import papaerSlide from "../sounds/paper slide.wav";
import accessGranted from "../sounds/access granted.wav";
import grantedBeep from "../sounds/access granted beep.wav";
import accessDenied from "../sounds/acces denied.wav";
import deniedBeep from "../sounds/access denied beep.wav";

const Hiddenput = (props) => {
  const { display } = props;
  const [fakePassword, setFakePassword] = useState("");
  const [slide] = useSound(papaerSlide);
  const [granted] = useSound(accessGranted);
  const [denied] = useSound(accessDenied);
  const [gb] = useSound(grantedBeep);
  const [db] = useSound(deniedBeep);

  useEffect(() => {
    slide();
  }, []); // eslint-disable-line

  const handleChange = (event) => {
    setFakePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hey logging some stuff", fakePassword);
    console.log("logging pw", process.env.REACT_APP_PASSWORD);
    if (fakePassword === process.env.REACT_APP_PASSWORD) {
      gb();
      granted();
      console.log("ACCESS GRANTED! WELCOME AGENT");
    } else {
      db();
      denied();
    }
  };

  if (!display) return <></>;

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField id="clearMe" onChange={handleChange} />
    </form>
  );
};

export default Hiddenput;
