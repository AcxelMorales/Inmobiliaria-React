import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import NavBar from "./components/layout/NavBar";
import ListHomes from "./components/views/ListHomes";
import theme from "./theme/theme";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <NavBar />

        <Grid container>
          <Switch>
            <Route path="/" exact component={ListHomes}></Route>
          </Switch>
        </Grid>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
