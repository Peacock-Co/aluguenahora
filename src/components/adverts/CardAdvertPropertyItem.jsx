// React redux
import React, { useState } from 'react';

// React router
// import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core/';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Typography from '@material-ui/core/Typography';
import HotelTwoToneIcon from '@material-ui/icons/HotelTwoTone';
import SquareFootIcon from '@material-ui/icons/SquareFoot';

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

export function CardAdvertPropertyItem({ advert, selectAdvert }) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const [currImg, setCurrImg] = useState(0);

  // const handleEntryClick = () => {
  //   dispatch(
  //     advertActive(id, {
  //       type,
  //       region,
  //       city,
  //       room,
  //       squareMeters,
  //       rentPrice,
  //       street,
  //     })
  //   );
  // };

  return (
    <div className={classes.root}>
      <Paper>
        <div className={classes.carousel}>
          <div
            className={classes.carouselInner}
            style={{
              backgroundImage: `url(${advert.advertPhotosUrl[currImg].photoUrl})`,
            }}
            alt={advert.photoUrl}
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
                currImg < advert.advertPhotosUrl.length - 1 &&
                  setCurrImg(currImg + 1);
              }}
            >
              <KeyboardArrowRight />
            </div>
          </div>
        </div>

        <div className={classes.card_details}>
          <Typography gutterBottom variant='h6' component='h2'>
            {advert.type}
          </Typography>
          <div className={classes.directions}>
            <Typography variant='h6' color='textSecondary' component='p'>
              {advert.region}
            </Typography>
            <Typography variant='h6' color='textSecondary' component='p'>
              {advert.street}
            </Typography>
            <Typography variant='h5' color='textSecondary' component='p'>
              {advert.city}
            </Typography>
          </div>
          <div className={classes.icons}>
            <div>
              <HotelTwoToneIcon />
              {advert.room}
            </div>
            <span>
              <SquareFootIcon />
              {advert.squareMeters}m2
            </span>
          </div>
          <div className={classes.prices}>
            <Typography>R$ {advert.rentPrice}</Typography>
          </div>
          <Grid container alignItems='center' justify='center'>
            <Grid item>
              <Button
                size='small'
                style={{
                  backgroundColor: '#312783',
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={() => selectAdvert(advert)}
              >
                Editar
              </Button>
            </Grid>
            <Grid item>
              <Button
                size='small'
                style={{
                  backgroundColor: '#C82E29',
                  color: 'white',
                  cursor: 'pointer',
                  margin: '0.5em',
                }}
                onClick={() => selectAdvert(advert)}
              >
                Deletar
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
