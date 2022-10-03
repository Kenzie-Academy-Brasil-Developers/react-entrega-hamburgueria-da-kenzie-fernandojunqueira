import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Inter', sans-serif;

    }

    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    ul,ol,li{
        list-style: none;
    }

    img{
        max-width: 100%;
    }

    :root{
        --black:#333333;
        --gray: #F5F5F5;
        --gray-border:#E0E0E0;
        --white:#FFFFFF;
        --green:#27AE60;
    }

    h2{
        font-size:18px;
        font-weight:700;
        line-height:24px;
        color:var(--black);
    }
    .App{
        position: relative;
    }
` 