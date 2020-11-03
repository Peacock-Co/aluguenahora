import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'react-lottie';
import animationData from '../../lotties/house-flat.json';

const useStyles = makeStyles((theme) => ({
  home: {
    height: '800px',
  },
}));

function Home() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRadio: 'xMidYMid slice',
    },
  };
  return (
    <div className={classes.home}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Home;
