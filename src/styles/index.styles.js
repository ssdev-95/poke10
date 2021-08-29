import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          padding: 0,
          margin: 0,
          boxSizing: 'border-box'
        },
        'body': {
          fontFamily: 'sans-serif',
          overflow: 'hidden'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#5a5aaf'
    },
    secondary: {
      main: '#ffc404'
    }
  }
});

export { theme, ThemeProvider, CssBaseline };