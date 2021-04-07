import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'cover',
  },
  image: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    maxWidth: '200',
    overflow: 'hidden',
    width: '100%',
  },
  arrowLeft: {
    display: 'flex',
    justifyItems: 'center',
  },
  arrowRight: {
    display: 'flex',
    justifyItems: 'center',
  },
}));

export default function PropertiesPhotosItems({ photo }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.arrowLeft}>
        <Button size='small'>
          <KeyboardArrowLeft />
        </Button>
      </div>
      <img className={classes.image} src={photo.photoUrl} alt={photo.id} />
      <div className={classes.arrowRight}>
        <Button size='small'>
          <KeyboardArrowRight />
        </Button>
      </div>
    </div>
  );
}
