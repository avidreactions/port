import React, { useState } from "react";
import { TextField } from "@mui/material";

const Hiddenput = (props) => {
  const { display } = props;
  const [fakePassword, setFakePassword] = useState("");

  const handleChange = (event) => {
    setFakePassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hey logging some stuff", fakePassword);
    console.log("logging pw", process.env.REACT_APP_PASSWORD);
    if (fakePassword === process.env.REACT_APP_PASSWORD) {
      console.log("ACCESS GRANTED! WELCOME AGENT");
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
