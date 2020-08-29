import React, { Fragment, useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import TextField from "../Global/TextField";

const NewGame = ({ storeAndActions }) => {
  const [word, setWord] = useState("");

  return (
    <Fragment>
      <Grid item xs={12}><Typography variant="h3" align="center">New Game</Typography></Grid>
  
      <Grid item xs={4}>
        <TextField 
          label="word"
          value={word}
          onChange={({target}) => setWord(target.value)}
        />
      </Grid>
  
      <Grid item xs={1} style={{ textAlign:'center' }}>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => storeAndActions.newGame(word)}
        >
          Create
        </Button>
      </Grid>
    </Fragment>
  );
}

export default NewGame;