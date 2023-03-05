import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeOptions as SystemThemeOptions, Theme as SystemTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

