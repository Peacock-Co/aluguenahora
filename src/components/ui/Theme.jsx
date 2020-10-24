import { createMuiTheme } from '@material-ui/core/styles';

const algBlue = '#edf2fb';
const algOrange = '#dc2f02';

export default createMuiTheme({
  palette: {
    common: {
      algBlue: `${algBlue}`,
      algOrange: `${algOrange}`,
    },
    primary: {
      main: `${algBlue}`,
    },
    secondary: {
      main: `${algOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
    },
  },
});
