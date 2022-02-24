import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import "./styles/App.css";

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "15em 0",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        gridTemplateRows: "auto",
        gridTemplateAreas: `"header header header"
                            "links . about"`,
      }}
    >
      <Box
        component="span"
        sx={{ gridArea: "header", fontFamily: "Ultra", fontSize: "3em" }}
      >
        Sean Hong
      </Box>
      <Box sx={{ margin: "5em 0", gridArea: "links" }}>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "lightgrey",
            },
          }}
          startIcon={<AssignmentIcon />}
          id="projects"
          aria-controls={open ? "projects" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Projects
        </Button>
        <Menu
          id="projects"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "projects",
          }}
        >
          <MenuItem onClick={handleClose}>Discourse Server</MenuItem>
          <MenuItem onClick={handleClose}>Bacon Ipsum</MenuItem>
          <MenuItem onClick={handleClose}>Github</MenuItem>
          <MenuItem onClick={handleClose}>Linked In</MenuItem>
        </Menu>
      </Box>
      <Box sx={{ margin: "5em 0", gridArea: "about" }}>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "lightgrey",
            },
          }}
          endIcon={<PersonIcon />}
        >
          About
        </Button>
      </Box>
    </Box>
  );
};

export default App;
