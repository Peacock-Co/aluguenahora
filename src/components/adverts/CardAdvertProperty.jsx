// React redux
import React from 'react';
import { useDispatch } from 'react-redux';

// React router
import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Moment js
import moment from 'moment';
import 'moment/locale/pt-br';
import { advertActive } from '../../actions/adverts';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  image: {
    height: '15em',
  },
});

export const CardAdvertProperty = ({
  id,
  type,
  street,
  neighbour,
  price,
  url,
}) => {
  moment.locale('pt-br');
  const advertDate = moment().format('LL');
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEntryClik = () => {
    dispatch(
      advertActive(id, {
        type,
        street,
        neighbour,
        price,
        url,
      })
    );
  };

  return (
    <Card className={classes.root} onClick={handleEntryClik}>
      <CardActionArea component={Link} to='/editar-anuncio'>
        <CardMedia
          component='img'
          alt='image'
          image={require('../../assets/ararahome.jpg')}
          title='Image'
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {type}
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            {street}
          </Typography>
          <Typography variant='h5' color='textSecondary' component='p'>
            {neighbour}
          </Typography>
          <Typography variant='h5' color='textSecondary' component='p'>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Typography style={{ fontSize: '.8rem' }}>{advertDate}</Typography>
    </Card>
  );
};
