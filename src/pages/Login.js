import React, { useState } from "react";
import { makeStyles, styled } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

import pic from "../Component/picture/Storehouse.png";

import swal from "sweetalert2";

export default function Login() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs="auto">
          <img
            src={pic}
            Width="1100"
            height="1100"
            className="img-fluid rounded "
          />
        </Grid>

        <Grid item xs={12} md={5} elevation={6} square>
          <Paper className={"paddingTop=30px"}>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form>
              <TextField
                id="Email"
                label="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                // onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                paddingTop="100px"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
