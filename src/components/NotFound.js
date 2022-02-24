import React from "react";
import { Box } from "@mui/material";
import jurassic from "../images/jurassiccomp.gif";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", margin: "5em 0" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center" },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: "5em", mt: 1, fontFamily: "Papercut" }}
        >
          AH! AH! AH!
        </Box>
        <Box component="span" sx={{ fontSize: "3em", mt: 1 }}>
          Nothing here!
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          height: 450,
          width: 350,
        }}
        alt="ah ah ah, you didn't say the magic word"
        src={jurassic}
      />
    </div>
  );
};

export default NotFound;
