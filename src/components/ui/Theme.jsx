import { createMuiTheme } from '@material-ui/core/styles';

const algBlue = '#F4F4F8';
const algRed = '#dc2f02';

export default createMuiTheme({
  palette: {
    common: {
      algBlue: `${algBlue}`,
      algOrange: `${algRed}`,
    },
    primary: {
      main: `${algBlue}`,
    },
    secondary: {
      main: `${algRed}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
    },
    h1: {
      fontWeight: 400,
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 300,
      fontSize: '2rem',
      lineHeight: 1.5,
      color: 'gray',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25em',
      fontWeight: 300,
    },
  },
});
