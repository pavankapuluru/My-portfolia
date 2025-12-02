import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
  Box,
} from "@mui/material";

interface ProjectCardProps {
  projectName: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  githubLink,
  liveLink,
  techStack,
}) => {
  return (
    <Card
      sx={{
        height: "100%", // 🔥 Same height for all cards
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 4,
        width: "250px",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {projectName}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {techStack.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              color="primary"
              variant="outlined"
              size="small"
            />
          ))}
        </Stack>
      </CardContent>

      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="primary"
          href={githubLink}
          target="_blank"
          fullWidth
          sx={{ mr: 1 }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href={liveLink}
          target="_blank"
          fullWidth
        >
          Live
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
