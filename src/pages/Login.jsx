import {useState} from "react";
import { Link } from "react-router-dom";
import{
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from "@mui/material";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully");
        }   
    };

    return (
        <Container maxWidth="sm"
        sx={{ minHeight: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center" }}
        >
            <Box    
            sx={{
                width: "100%",
                padding: 4,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 2,   
            }}
            >
                <Typography variant="h4" align="center"
                sx={{ marginBottom: 4 }}
                >
                    Login   
                </Typography>

                <Box 
                sx={{ display: "flex", 
                    flexDirection: "column",
                     gap: 2 }}
                >
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
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                    />  

                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    >
                        Login
                    </Button>

                    <Typography
                    align="center">
                        Don't have an account? <Link to="/register">Register
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
