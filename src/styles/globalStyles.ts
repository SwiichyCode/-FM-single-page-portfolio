// globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

// Breakpoints error 1024px 
// Add clamp value to font-size and line-height

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, button, input, textarea {
        font-family: 'Space Grotesk', sans-serif;
       
    }


    
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        
    }

    h1 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 4rem;
        letter-spacing: -1.13636px;

        @media screen and (min-width: 768px) {
           
        span {
            font-size: 7.2rem;
            line-height: 7.2rem;
            letter-spacing: -2.04545px;
            }
        }

        @media screen and (min-width: 1024px) {
            
            span {
            font-size: 8.8rem;
            line-height: 8.8rem;
        }
        }
    }

    

    h2 {
        font-weight: 700;
        font-size: 4rem;
        line-height: 4rem;
        text-align: center;
        letter-spacing: -1.13636px; 

        @media screen and (min-width: 1024px) {
            font-size: 8.8rem;
            line-height: 8.8rem;
        }
    }

    h3 {
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4rem;

        @media screen and (min-width: 768px) {
            font-size: 4.8rem;
            line-height: 5.6rem;
        }

       
    }

    h4 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
    }

    p {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-grey);

        @media screen and (min-width: 768px) {
            font-size: 1.8rem;
            line-height: 2.8rem;
        }
    }

    :root {
        --color-dark: #151515;
        --color-green: #4EE1A0;
        --color-grey: #D9D9D9;
        --color-dark-grey: #242424;
        --color-white: #FFFFFF;
        --color-red: #FF6F5B;
        --gap-24: 2.4rem;
        --gap-section: 8rem;
    }
`;
