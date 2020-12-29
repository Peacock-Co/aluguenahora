import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, Button } from '@material-ui/core/';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  image: {
    height: '15em',
  },
});

export default function CardHouse() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='image'
          height='140'
          image={require('../../assets/ararahome.jpg')}
          title='Image'
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            Apartamento
          </Typography>
          <Typography variant='h6' color='textSecondary' component='p'>
            Rua Praia de Itaparica
          </Typography>
          <Typography variant='h5' color='textSecondary' component='p'>
            Aluguel R$ 1200
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          60 m2
        </Button>
        <Button size='small' color='inherit'>
          3 Quartos
        </Button>
      </CardActions>
    </Card>
  );
}
