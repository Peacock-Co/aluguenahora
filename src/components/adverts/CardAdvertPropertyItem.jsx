// React redux
import React from 'react';

// React router
import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import HotelTwoToneIcon from '@material-ui/icons/HotelTwoTone';
import SquareFootIcon from '@material-ui/icons/SquareFoot';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '0.5rem',
    borderRadius: '.5rem',
  },
  image: {
    height: '10em',
  },
  card_details: {
    display: 'flex',
    flexDirection: 'column',
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

export function CardAdvertPropertyItem({ advert }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square elevation={0} component={Link} to='/editar-anuncio'>
        <img className={classes.image} src={} alt={} />

        <div className={classes.card_details}>
          <Typography gutterBottom variant='h6' component='h2'>
            {advert.type}
          </Typography>
          <div className={classes.directions}>
            <Typography variant='h6' color='textSecondary' component='p'>
              {advert.region}
            </Typography>
            <Typography variant='h5' color='textSecondary' component='p'>
              {advert.city}
            </Typography>
          </div>
          <div className={classes.icons}>
            <span>
              <HotelTwoToneIcon />
              {advert.rooms}
            </span>
            <span>
              <SquareFootIcon />
              {advert.squareMeters}
            </span>
          </div>
          <div className={classes.prices}>
            <Typography>R$ {advert.rentPrice}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}
