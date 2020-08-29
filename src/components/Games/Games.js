import React from "react";
import Table from "../Global/Table";
import { TableRow, TableCell, Paper, Box, Grid } from "@material-ui/core";

const Games = ({ storeAndActions }) => {
  const { games } = storeAndActions.store; 

  return (
    <Box p={2}>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Paper>
            <Table title="Games">
              {games.map(game => (
                <TableRow>
                  <TableCell>AAA</TableCell>
                </TableRow>
              ))}
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Games;