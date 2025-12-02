import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "linear-gradient(90deg, #005bea 0%, #00c6fb 100%)",
        color: "#fff",
      }}
    >
      <h3 style={{ margin: 0 }}>Pavan Kumar</h3>

      <Tabs
        value={location.pathname}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="About"
          value="/"
          component={Link}
          to="/"
          sx={{ textTransform: "none", fontSize: "16px" }}
        />

        <Tab
          label="Projects"
          value="/projects"
          component={Link}
          to="/projects"
          sx={{ textTransform: "none", fontSize: "16px" }}
        />

        <Tab
          label="Contact"
          value="/contact"
          component={Link}
          to="/contact"
          sx={{ textTransform: "none", fontSize: "16px" }}
        />
      </Tabs>
    </Box>
  );
}

export default Navbar;
