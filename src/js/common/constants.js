import { createTheme } from '@mui/material/styles';

export const PRIMARY_COLOR = 'rgb(36, 153, 239)';
export const SECONDARY_COLOR = 'rgb(255, 151, 119)';
export const PRIMARY_COLOR_TEXT = 'rgb(29, 36, 56)';
export const SECONDARY_COLOR_TEXT = 'rgb(148, 164, 196)';

export const theme = createTheme({
    typography: {
        fontFamily: ['Varela', 'Avenir', 'Helvetica', 'sans-serif'].join(','),
        allVariants: {
            wordBreak: 'break-word'
        },
        button: {
            textTransform: 'none'
        },
    },
    palette: {
        text: {
            primary: PRIMARY_COLOR_TEXT,
            secondary: SECONDARY_COLOR_TEXT
        },
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: PRIMARY_COLOR,
        },
    },
});