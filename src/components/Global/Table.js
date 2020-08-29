import React, { useState } from "react";
import { Table as MuiTable, Typography, TableHead, TableRow, TableCell, TableBody, Grid, Tooltip } from "@material-ui/core";
import IconButton from "./IconButton";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Table = ({
  title, 
  headers, 
  children,
  expand = true, 
  expandable = true, 
  titleVariant = "h2", 
}) => {
  const childrenList = Array.isArray(children) ? children : [children];
  const [expanded, setExpanded] = useState(expand);

  return (
    <MuiTable size="small">
      <TableHead>
        <TableRow>
          <TableCell colSpan={99}>
            <Grid container alignItems="center">
              <Grid item xs={1}>
                {expandable && (
                  <Tooltip title="Expand or collapse this table">
                    <Grid item xs={1}>
                      <IconButton Icon={expanded ? ExpandLess : ExpandMore} onClick={() => setExpanded(!expanded)} />
                    </Grid>
                  </Tooltip>
                )}
              </Grid>

              <Grid item>
                <Typography variant={titleVariant}>{title}</Typography>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
        
        {headers && expanded && (
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}>
                <Typography>{header.toUpperCase()}</Typography>
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableHead>
  
      {expanded && (
        <TableBody>
          {childrenList.map(child => child)}
        </TableBody>
      )}
    </MuiTable>
  );
}

export default Table;