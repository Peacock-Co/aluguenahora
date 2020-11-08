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
      fontWeight: '700',
    },
    h2: {
      fontWeight: '500',
      fontSize: '2rem',
    },
    h3: {
      fontWeight: '300',
      fontSize: '1.5rem',
      color: 'gray',
      lineHeight: '1.5em',
    },
  },
});
