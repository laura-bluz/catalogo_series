import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #090cbd;
        --blue-weak: #228be6;

        /* --text-title: #2d2c6e; */
        --text-title:#090cbd;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    //font-size da página: 16px (desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) { 
            font-size: 87.5%; //14px
        }
    }

    //REM = 1rem = font-size da página

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`