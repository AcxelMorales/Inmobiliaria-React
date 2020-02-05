import React, { Component } from "react";

import {
  Container,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import LockOutLineIcon from "@material-ui/icons/LockOutlined";

const style = {
  papper: {
    marginTop: 25,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: 8,
    backgroundColor: "#e53935"
  },
  form: {
    width: "100%",
    marginTop: 10
  },
  submit: {
    marginTop: 25,
    marginBottom: 20
  }
};

class SignUp extends Component {
  state = {
    user: {
      name: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  handleOnChange = e => {
    let user = Object.assign({}, this.state.user);
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    console.log(this.state.user);
  };

  render() {
    return (
      <Container maxWidth="md">
        <div style={style.papper}>
          <Avatar style={style.avatar}>
            <LockOutLineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form style={style.form}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  name="name"
                  onChange={this.handleOnChange}
                  value={this.state.user.name}
                  fullWidth
                  label="Enter your name"
                  autoComplete="off"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="lastName"
                  onChange={this.handleOnChange}
                  value={this.state.user.lastName}
                  fullWidth
                  label="Enter your last name"
                  autoComplete="off"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="email"
                  onChange={this.handleOnChange}
                  value={this.state.user.email}
                  fullWidth
                  type="email"
                  label="Enter your e-mail"
                  autoComplete="off"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  name="password"
                  onChange={this.handleOnChange}
                  value={this.state.user.password}
                  fullWidth
                  type="password"
                  label="Enter your password"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item md={6} xs={12}>
                <Button
                  type="submit"
                  onClick={this.handleOnSubmit}
                  variant="contained"
                  fullWidth
                  size="large"
                  color="primary"
                  style={style.submit}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
