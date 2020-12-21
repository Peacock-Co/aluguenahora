import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  customButton: {
    marginTop: '2em',
    width: '20em',
    height: '3.5em',
    borderRadius: '0.5em',
  },
}));

const CustomButton = ({ children, ...otherProps }) => {
  const classes = useStyles();
  return (
    <Button
      variant='contained'
      size='medium'
      color='secondary'
      className={classes.customButton}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
