import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// assets imgs
import facebook from '../../assets/facebook-square-brands.svg';
import twitter from '../../assets/twitter-brands.svg';
import instagram from '../../assets/instagram-square-brands.svg';
import linkedin from '../../assets/linkedin-brands.svg';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    height: '13em',
    zIndex: 1302,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: '8em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
  },
  mainContainer: {
    height: '13em',
    left: '-10em',
  },
  link: {
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#5D5F62',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    margin: '1em',
    height: '2em',
    width: '2em',
    [theme.breakpoints.down('xs')]: {
      height: '1.5em',
      width: '1.5em',
    },
  },
  socialContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3.5em',
      justifyContent: 'center',
      right: '0',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1.5em',
      right: '0',
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Divider />

      <Grid
        container
        justify='space-around'
        alignItems='center'
        className={classes.mainContainer}
      >
        {/*HOME LINK*/}
        <Hidden mdDown>
          <Grid item>
            <Grid container>
              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(0)}
                    to='/'
                    className={classes.link}
                  >
                    Home
                  </Grid>
                </Grid>
              </Grid>

              {/* Imoveis para alugar*/}

              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(1)}
                    to='/imoveis-para-alugar'
                    className={classes.link}
                  >
                    Imóveis para alugar
                  </Grid>
                </Grid>
              </Grid>

              {/*Para proprietarios */}

              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                  <Grid item className={classes.link}>
                    Para proprietários
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(1);
                    }}
                    to='/anunciar-para-alugar'
                    className={classes.link}
                  >
                    Anunciar imóvel para alugar
                  </Grid>
                  <Grid
                    item
                    component={Link}
                    onClick={() => {
                      props.setValue(2);
                      props.setSelectedIndex(2);
                    }}
                    to='/meus-imoveis'
                    className={classes.link}
                  >
                    Meus imóveis
                  </Grid>
                </Grid>
              </Grid>

              {/* Quem somos e contato */}

              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(3)}
                    to='/quem-somos'
                    className={classes.link}
                  >
                    Quem somos
                  </Grid>

                  <Grid
                    item
                    component={Link}
                    onClick={() => props.setValue(4)}
                    to='/contato'
                    className={classes.link}
                  >
                    Contate nos
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        {/* Social media container */}

        <Grid item className={classes.socialContainer}>
          <Grid>
            <Grid
              item
              component={'a'}
              href='https://www.facebook.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                alt='facebook logo'
                src={facebook}
                className={classes.icon}
              />
            </Grid>
            <Grid
              item
              component={'a'}
              href='https://www.twitter.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img alt='twitter logo' src={twitter} className={classes.icon} />
            </Grid>
            <Grid
              item
              component={'a'}
              href='https://www.instagram.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                alt='instagram logo'
                src={instagram}
                className={classes.icon}
              />
            </Grid>
            <Grid
              item
              component={'a'}
              href='https://www.linkedin.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                alt='linkedin logo'
                src={linkedin}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
