import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#161922', // Deep sleek charcoal for Navbar/Footer
    },
    secondary: {
      main: '#ff6d00', // South Park-inspired vibrant orange accent
    },
    background: {
      default: '#0f1117',
      paper: '#1e222d',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    display2: {
      fontWeight: 800,
      letterSpacing: '0.03em',
    },
    headline: {
      fontWeight: 600,
    },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return WithRoot;
}

export default withRoot;
