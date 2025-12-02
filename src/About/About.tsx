import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Avatar
            src="/src/myimage.png"
            alt="Profile"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              border: "4px solid #1976d2",
            }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom fontWeight={600}>
            About Me
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            Hi! I'm <strong>Pavan Kumar</strong>, a passionate Frontend
            Developer focused on creating clean, modern, and user-friendly web
            applications using React, TypeScript, and Material UI.
          </Typography>

          <Typography variant="h5" sx={{ marginTop: 3 }} fontWeight={600}>
            Skills
          </Typography>

          <List dense>
            {[
              "React JS",
              "JavaScript (ES6+)",
              "TypeScript",
              "Material UI (MUI)",
              "HTML / CSS",
              "Git & GitHub",
            ].map((skill, index) => (
              <ListItem key={index} sx={{ padding: "4px 0" }}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
