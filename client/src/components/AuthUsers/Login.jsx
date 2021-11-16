import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { validateLogin } from "./APIAuthUsers";

const Login = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginInfo = {
      username: data.get("username"),
      password: data.get("password"),
    };

    validateLogin(loginInfo, history);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "50vh" }}
    >
      <Box
        m="auto"
        component="form"
        noValidate
        onSubmit={handleSubmit}
        xs={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography spacing={2} variant="h6" xs={{ mb: 3 }}>
              Sign in
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="username"
              name="username"
              required
              fullWidth
              id="username"
              label="User Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              name="password"
              required
              fullWidth
              type="password"
              id="password"
              label="Password"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Login;
