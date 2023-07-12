import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#67bac0',
      light: '#bae7e8',
      dark: '#558a8e',
      contrastText: '#362f3e'
    },
    secondary: {
      main: '#c06d67',
      light: '#efc8ca',
      dark: '#c5422a',
      contrastText: '#EFEFF0'
    },
    background: {
      default: '#362f3e',
      paper: '#efeff0'
    },
    text: {
      primary: '#362f3e',
      secondary: '#EFEFF0',
      disabled: '#f6edde'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'primary'
      }
    }
  }
});
