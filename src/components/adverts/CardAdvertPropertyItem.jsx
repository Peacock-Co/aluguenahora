// React redux
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// React router
// import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Typography from '@material-ui/core/Typography';
import HotelTwoToneIcon from '@material-ui/icons/HotelTwoTone';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import { advertActive } from '../../actions/Adverts';

const useStyles = makeStyles({
  root: {
    width: '15em',
    margin: '0.5rem',
    borderRadius: '.5rem',
  },
  carousel: {
    width: '100%',
    height: '12em',
    position: 'relative',
    overflow: 'hidden',
  },
  carouselInner: {
    height: '100%',
    maxWidth: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
  },
  left: {
    flex: '25%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    display: 'grid',
    placeItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
  center: {
    flex: '50%',
    height: '100%',
  },
  right: {
    flex: '25%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    display: 'grid',
    placeItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
  card_details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  directions: {
    display: 'flex',
    flexDirection: 'column',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  prices: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export function CardAdvertPropertyItem({
  id,
  imageUrl,
  type,
  region,
  city,
  room,
  squareMeters,
  rentPrice,
  street,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [currImg, setCurrImg] = useState(0);

  const handleEntryClick = () => {
    dispatch(
      advertActive(id, {
        type,
        region,
        city,
        room,
        squareMeters,
        rentPrice,
        street,
      })
    );
  };

  return (
    <div className={classes.root}>
      <Paper onClick={handleEntryClick}>
        {/* {imageUrl &&
          {
            /* <div className={classes.carousel}>
            <div
              className={classes.carouselInner}
              style={{
                backgroundImage: `url(${imageUrl.advertPhotosUrl[currImg].photoUrl})`,
              }}
              alt={imageUrl.photoUrl}
            >
              <div
                className={classes.left}
                onClick={() => {
                  currImg > 0 && setCurrImg(currImg - 1);
                }}
              >
                <KeyboardArrowLeft />
              </div>
              <div className={classes.center}></div>
              <div
                className={classes.right}
                onClick={() => {
                  currImg < imageUrl.advertPhotosUrl.length - 1 &&
                    setCurrImg(currImg + 1);
                }}
              >
                <KeyboardArrowRight />
              </div>
            </div>
          </div> */}

        <div className={classes.card_details}>
          <Typography gutterBottom variant='h6' component='h2'>
            {type}
          </Typography>
          <div className={classes.directions}>
            <Typography variant='h6' color='textSecondary' component='p'>
              {region}
            </Typography>
            <Typography variant='h6' color='textSecondary' component='p'>
              {street}
            </Typography>
            <Typography variant='h5' color='textSecondary' component='p'>
              {city}
            </Typography>
          </div>
          <div className={classes.icons}>
            <span>
              <HotelTwoToneIcon />
              {room}
            </span>
            <span>
              <SquareFootIcon />
              {squareMeters}
            </span>
          </div>
          <div className={classes.prices}>
            <Typography>R$ {rentPrice}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}
