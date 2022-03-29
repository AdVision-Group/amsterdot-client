import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


@font-face {
font-family: 'Acumin';
src: url('/fonts/AcuminVariableConcept.otf');
}

@font-face {
  font-family: 'Avenir Next';
  src: url('/fonts/final/AvenirNext-Regular-08.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Avenir Next';
  src: url('/fonts/final/AvenirNext-Medium-06.ttf');
  font-weight: 700;

@font-face {
  font-family: 'Avenir Next';
  src: url('/fonts/final/AvenirNext-Bold-01.ttf');
  font-weight: 900;
}

@font-face {
  font-family: 'Acumin Variable Concept';
  src: url('/fonts/AcuminVariableConcept-v2.otf') format('embedded-opentype'), 
   url('/fonts/AcuminVariableConcept-v2.otf') format('woff'), 
   url('/fonts/AcuminVariableConcept-v2.otf')  format('truetype'),
   url('/fonts/AcuminVariableConcept-v2.otf') format('svg');
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
    font-family: "Avenir Next", 'Acumin', sans-serif;
    /* font-family: sans-serif; */
    background-color: #000;
    overflow-x: hidden;
    width: 100%;
    /* width: 100%;
    height: 100vh; */
    /* overflow: hidden;  */
  }

  button {
    font-family: "Avenir Next", 'Acumin', sans-serif;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

`
