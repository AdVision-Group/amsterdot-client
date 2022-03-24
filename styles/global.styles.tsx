import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


@font-face {
font-family: 'Acumin';
src: url('../fonts/Acumin-BdItPro.otf');
src: url('../fonts/Acumin-BdPro.otf');
src: url('../fonts/Acumin-ItPro.otf');
src: url('../fonts/Acumin-RPro.otf');
font-weight: 400, 700;
font-style: normal;
}
@font-face {
font-family: 'Avenir';
src: url('../fonts/AvenirNextLTPro-Bold.otf');
src: url('../fonts/AvenirNextLTPro-It.otf');
src: url('../fonts/Acumin-ItPro.otf');
src: url('../fonts/AvenirNextLTPro-Regular.otf');
font-weight: 400, 700;
font-style: normal;
}

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
    font-family: "Avenir", 'Acumin', sans-serif;
    /* font-family: sans-serif; */
    background-color: #000;
    overflow-x: hidden;
    width: 100%;
    /* width: 100%;
    height: 100vh; */
    /* overflow: hidden;  */
  }

  button {
    font-family: "Avenir", 'Acumin', sans-serif;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

`
