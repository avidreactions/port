import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, Link } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "../styles/App.css";

const Home = () => {
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
                            ". links ."`,
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
          <MenuItem>
            <Link
              href="https://www.pfamtx.com"
              sx={{
                textDecoration: "none",
                color: "black",
              }}
            >
              PFAMTX
            </Link>
          </MenuItem>
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
