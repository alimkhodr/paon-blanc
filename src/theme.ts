import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#253127',
        },
        secondary: {
            main: '#383838',
            A100: '#0D7977',
            A200: '#0A6060',
            A400: '#1A4848',
        },
        background: {
            default: '#ffffff',
            paper: '#E2D8BC',
        }
    },
    typography: {
        fontFamily: "Merriweather"
    }
});

theme = responsiveFontSizes(theme);

export default theme;