import React, { Fragment } from "react";
import GamesContainer from "../Games/GamesContainer";
import { AppBar, Toolbar } from "@material-ui/core";
import GameContainer from "../Game/GameContainer";

const Layout = ({ storeAndActions }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
      </Toolbar>
    </AppBar>

    <GamesContainer storeAndActions={storeAndActions} />

    <GameContainer storeAndActions={storeAndActions} />
  </Fragment>
)

export default Layout;