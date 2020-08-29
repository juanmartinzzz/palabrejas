import React, { Fragment } from "react";
import GamesContainer from "../Games/GamesContainer";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";

const Layout = ({ storeAndActions }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
      </Toolbar>
    </AppBar>

    <GamesContainer storeAndActions={storeAndActions} />
    
    <GamesContainer storeAndActions={storeAndActions} />
  </Fragment>
)

export default Layout;