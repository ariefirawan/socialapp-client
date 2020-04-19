import React, { Fragment } from 'react';
import noImg from '../images/blank-profile.png';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  Card: {
    display: 'flex',
    marginButtom: 20,
  },
  cardContent: {
    width: '100%',
    flexDirection: 'column',
    padding: 25,
  },
  cover: {
    minWidth: 200,
    objectFit: 'cover',
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginButtom: 7,
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },
  fullLine: {
    height: 15,
    width: '90%',
    marginButtom: 10,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  halfLine: {
    height: 15,
    width: '50%',
    marginButtom: 10,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
});

const ScreamSkeleton = (props) => {
  const { classes } = props;

  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={noImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));

  return <Fragment>{content}</Fragment>;
};

export default withStyles(styles)(ScreamSkeleton);
