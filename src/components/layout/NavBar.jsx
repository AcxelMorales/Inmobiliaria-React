import React from "react";

import AppBar from "@material-ui/core/AppBar";

import BarSession from "./bar/BarSession";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
         <BarSession />
      </AppBar>
    </div>
  );
};

export default NavBar;
