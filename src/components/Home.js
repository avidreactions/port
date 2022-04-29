import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Link } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Hiddenput from "../components/Hiddenput";
import "../styles/App.css";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [count, setCount] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowInput = () => {
    if (count > 5) return;

    setCount(count + 1);

    if (count === 5) {
      setShowInput(true);
    }
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
                            ". links ."`,
      }}
      onClick={handleShowInput}
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
        <Hiddenput display={showInput} />
        <Menu
          id="projects"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "projects",
          }}
        >
          <MenuItem>
            <Link
              href="https://www.github.com/svhong"
              sx={{
                textDecoration: "none",
                color: "black",
              }}
            >
              GitHub
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="https://www.linkedin.com/in/svhong"
              sx={{
                textDecoration: "none",
                color: "black",
              }}
            >
              LinkedIn
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Home;
