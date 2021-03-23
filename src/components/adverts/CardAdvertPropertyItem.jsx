// React redux
import React from 'react';

// React router
import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    msFlexDirection: 'column',
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

export function CardAdvertPropertyItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to='/editar-anuncio'>
        <CardMedia
          component='img'
          alt='image'
          image={require('../../assets/pics/ararahome.jpg')}
          title='Image'
          className={classes.image}
        />
        <CardContent>
          <div className={classes.card_details}>
            <Typography gutterBottom variant='h6' component='h2'></Typography>
            <div className={classes.directions}>
              <Typography
                variant='h6'
                color='textSecondary'
                component='p'
              ></Typography>
              <Typography
                variant='h5'
                color='textSecondary'
                component='p'
              ></Typography>
            </div>
            <div className={classes.icons}>
              <span>
                <HotelTwoToneIcon />
              </span>
              <span>
                <SquareFootIcon />
              </span>
            </div>
            <div className={classes.prices}>
              <Typography></Typography>
              <Typography></Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
