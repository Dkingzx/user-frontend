import { Container, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: 4,
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Welcome to  Desing's User Experience Application
        </Typography>

        <Button
          component={Link}
          to="/login"
          variant="contained"
          fullWidth
        >
          Login
        </Button>

        <Button
          component={Link}
          to="/register"
          variant="outlined"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Home;