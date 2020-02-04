import React, { Component } from "react";

import { Toolbar, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

class BarSession extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Toolbar>
        <Typography variant="h6">ACXEL HOMES</Typography>
        <div className={classes.sectionDesktop}>
          <Button>Login</Button>
        </div>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(BarSession);