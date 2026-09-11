import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber =
        "Enter a valid 10-digit mobile number";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword =
        "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <Container maxWidth="sm"
    sx={{minHeight: "100vh", display: "flex",
     alignItems: "center", justifyContent: "center"}}>

      <Box
        sx={{
            width: "100vh",
            padding: 4,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 2,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: 4 }}
        >
          Registration
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name}
          />

          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            label="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            fullWidth
            error={Boolean(errors.mobileNumber)}
            helperText={errors.mobileNumber}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>

            <Typography align="center" sx={{ marginTop: 2 }}>
                Already have an account? <Link to="/login">Login
                </Link>
            </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Registration;