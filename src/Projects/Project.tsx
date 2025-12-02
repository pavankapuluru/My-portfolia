import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projectList = [
    {
      projectName: "Calculator",
      githubLink: "https://github.com/pavankapuluru/calculator",
      liveLink: "https://pavankapuluru.github.io/calculator/",
      techStack: ["HTML", "CSS", "TypeScript"],
    },
    {
      projectName: "Infinite Scrolling",
      githubLink: "https://github.com/pavankapuluru/infinite-scrolling2",
      liveLink: "https://app-scrolling.netlify.app/",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      projectName: "Counter App",
      githubLink: "https://github.com/pavankapuluru/counter-app",
      liveLink: "https://pavan-counter.netlify.app/",
      techStack: ["React", "TypeScript"],
    },
    {
      projectName: "Weather App",
      githubLink: "https://github.com/pavankapuluru/weather-api",
      liveLink: "https://pavankapuluru.github.io/weather-api/",
      techStack: ["HTML", "CSS", "TypeScript"],
    },
    {
      projectName: "Sign In Page",
      githubLink: "https://github.com/pavankapuluru/signup-signin-pages",
      liveLink: "https://pavankapuluru.github.io/signup-signin-pages/",
      techStack: ["HTML", "CSS"],
    },
    {
      projectName: "User Table",
      githubLink: "https://github.com/pavankapuluru/user-table",
      liveLink: "https://pavankapuluru.github.io/user-table/",
      techStack: ["HTML", "CSS", "TypeScript"],
    },
    {
      projectName: "Student Card",
      githubLink: "https://github.com/pavankapuluru/student-card",
      liveLink: "https://pavankapuluru.github.io/student-card/",
      techStack: ["HTML", "CSS", "TypeScript"],
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center">
        My Projects
      </Typography>

      <Grid container spacing={3}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              projectName={project.projectName}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              techStack={project.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
