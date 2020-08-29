import React from "react";
import Table from "../Global/Table";
import { TableRow, TableCell, Paper, Box, Grid, Button } from "@material-ui/core";
import { getDateFromTimestamp } from "../../services/datetime/date";
import { getHumanDate } from "../../services/formatter/formatter";
import NewGame from "./NewGame";

const Games = ({ storeAndActions }) => {
  const { games } = storeAndActions.store;

  return (
    <Box p={2}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={10} md={8} lg={6}>
          <Paper>
            <Table title="Games" headers={["created", "word", ""]}>
              {games.map((game, index) => (
                <TableRow key={index}>
                  <TableCell>{getHumanDate({date: getDateFromTimestamp(game.created)})}</TableCell>
                  <TableCell>{game.word}</TableCell>
                  <TableCell><Button variant="outlined" color="secondary" size="small">Play</Button></TableCell>
                </TableRow>
              ))}
            </Table>
          </Paper>
        </Grid>

        <NewGame storeAndActions={storeAndActions} />
      </Grid>
    </Box>
  )
}

export default Games;