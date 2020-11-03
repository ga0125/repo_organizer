// -----------------------------
// File: src/Components/Table/render/Cards.component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 31 oct 2020
// Brief: Cards component
// -----------------------------

// -----------------------------
// Import libraries
import React from 'react';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import cardStyle from './Cards.styles';

export default function CardsComponent() {
  // -----------------------------
  // Initialize instances
  const classes = cardStyle();
  const dataStore = useSelector((state) => state.listRepoReducers);
  const { data } = dataStore;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {data && data.map((card) => (
        <Grid className={classes.gridItem} item key={card.name}>
          <Card className={classes.root} key={card.name}>
            <CardContent>
              <Grid>
                <Avatar className={classes.avatar} aria-label="Avatar" src={card.owner.avatar} />
              </Grid>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <Link href={`http://www.github.com/${card.full_name}`} target="_blank" className={classes.link}>
                  {card.name}
                </Link>
              </Typography>
              <Table className={classes.table} aria-label="customized table">
                <TableBody>
                  {/* Language */}
                  <TableRow>
                    <TableCell align="left" className={classes.cellTitle}>
                      Tecnologia:
                    </TableCell>
                    <TableCell align="left" className={classes.cellContent}>
                      {card.language}
                    </TableCell>
                  </TableRow>

                  {/* Owner */}
                  <TableRow className={classes.darkRow}>
                    <TableCell align="left" className={classes.cellTitle}>
                      Autor:
                    </TableCell>
                    <TableCell align="left" className={classes.cellContent}>
                      {card.owner.username}
                    </TableCell>
                  </TableRow>

                  {/* Rating */}
                  <TableRow>
                    <TableCell align="left" className={classes.cellTitle}>
                      <Rating name="read-only" value={card.stars} readOnly />
                    </TableCell>
                    <TableCell align="left" className={classes.cellContent}>
                      avaliação
                    </TableCell>
                  </TableRow>

                  {/* Forks */}
                  <TableRow className={classes.darkRow}>
                    <TableCell align="right">
                      <ShareIcon className={classes.cellIcon} />
                    </TableCell>
                    <TableCell align="left" className={classes.cellContent}>
                      <Typography className={classes.desc}>
                        {`${card.forks} forks`}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
