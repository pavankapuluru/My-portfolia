import { Box, Typography, Link, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 8,
        padding: "25px 40px",
        textAlign: "center",
        background: "linear-gradient(90deg, #005bea 0%, #00c6fb 100%)",
        color: "white",
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Link
          href="mailto:kapulurupavan@gmail.com"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
          underline="none"
        >
          <Email sx={{ mr: 0.5 }} /> Email
        </Link>

        <Link
          href="https://github.com/yourname"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
          underline="none"
        >
          <GitHub sx={{ mr: 0.5 }} /> GitHub
        </Link>

        <Link
          href="https://linkedin.com/in/pavan"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
          underline="none"
        >
          <LinkedIn sx={{ mr: 0.5 }} /> LinkedIn
        </Link>
      </Stack>

      <Typography sx={{ fontSize: "15px", mt: 1, opacity: 0.9 }}>
        © 2025 Pavan Kumar | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
