import { createTheme as functionTheme} from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const createTheme = functionTheme({
    palette: {
        primary: {
          main: '#009FBD',
        },
        secondary: {
          main: '#210062',
        },
        error: {
          main: red.A400,
        },
      },
});