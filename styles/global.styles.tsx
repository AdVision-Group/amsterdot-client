import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    font-size: 62.5%;
    /* overflow: hidden; */
    /* height: 100%; */
  }

  body {
    line-height: 1.5;
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    background-color: #000;
    /* width: 100%;
    height: 100vh; */
    /* overflow: hidden;  */
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

`
