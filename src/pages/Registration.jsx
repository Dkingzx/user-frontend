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
const handleChange = (field, value) => {
  let errorMessage = "";

  if (field === "email") {
    if (!value.trim()) {
      errorMessage = "Email is required";
    } else if (!value.includes("@")) {
      errorMessage = "Enter a valid email";
    }
  }

  if (field === "mobileNumber") {
    if (!value.trim()) {
      errorMessage = "Mobile number is required";
    } else if (!/^\d{10}$/.test(value)) {
      errorMessage = "Mobile number must be 10 digits";
    }
  }

  if (field === "password") {
    if (!value.trim()) {
      errorMessage = "Password is required";
    } else if (value.length < 6) {
      errorMessage = "Password must be at least 6 characters";
    }
  }

  setErrors({
    ...errors,
    [field]: errorMessage,
  });
};
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
            onChange={(e) => {setEmail(e.target.value);
                handleChange("email", e.target.value);}}
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            label="Mobile Number"
            value={mobileNumber}
            onChange={(e) => {setMobileNumber(e.target.value);
                handleChange("mobileNumber", e.target.value);}}
            fullWidth
            error={Boolean(errors.mobileNumber)}
            helperText={errors.mobileNumber}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
  const value = e.target.value;
  setPassword(value);
  handleChange("password", value);

  if (confirmPassword && confirmPassword !== value) {
    setErrors({
      ...errors,
      password: errors.password,
      confirmPassword: "Passwords do not match",
    });
  } else if (confirmPassword === value) {
    setErrors({
      ...errors,
      password: errors.password,
      confirmPassword: "",
    });
  }
}} 
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => {const value =e.target.value;
                setConfirmPassword(value);

                if (!value.trim()) {
                    setErrors ({
                       ...errors,
                        confirmPassword: "Confirm password is required",
                    });
                } else if ( password !== value) {
                    setErrors({
                        ...errors,
                        confirmPassword: "Passwords do not match",
                    });
                } else {setErrors({
                    ...errors,
                    confirmPassword: "",
                });
                }}
            }
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