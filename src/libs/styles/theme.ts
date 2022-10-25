import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Google Sans',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(',')
  }
});
