import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
 
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: red[500],
    },
  },
  typography: {
    h4: {
        fontSize: '2rem',
        fontWeight: 600,
      },
  },
});
 
export default responsiveFontSizes(theme);