import { openSans } from '@/lib/fonts';
import { ThemeOptions, createTheme, responsiveFontSizes } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: openSans.style.fontFamily
  }
};

const theme = createTheme(themeOptions);

export default responsiveFontSizes(theme);
