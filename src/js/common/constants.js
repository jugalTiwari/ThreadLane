import { createTheme } from '@mui/material/styles';

export const PRIMARY_COLOR = 'rgb(36, 153, 239)';
export const SECONDARY_COLOR = 'rgb(255, 151, 119)';

export const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none'
        }
    },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: PRIMARY_COLOR,
        },
        secondary: {
            // This is green.A700 as hex.
            main: PRIMARY_COLOR,
        },
    },
});