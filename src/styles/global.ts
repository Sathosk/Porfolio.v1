import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, button {
        all: unset;
        cursor: pointer;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: #333333;
        color: white;
    }

    .container {
        width: 80%;
        margin: 0 auto;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.73) 17%, rgba(0, 0, 0, 0.66) 35%, rgba(0, 0, 0, 0.55) 62%, rgba(0, 0, 0, 0.4) 100%);
        background-attachment: fixed;
    }

    .activeLink {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .fixedBackground {
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
`;