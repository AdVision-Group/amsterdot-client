import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


@font-face {
font-family: 'Acumin';
src: url('../fonts/AcuminVariableConcept.otf');

/* font-weight: 400, 700;
font-style: normal; */
}

@font-face {
  font-family: 'Avenir Next';
  src: url('../fonts/AvenirNextLTPro-Regular.otf'); /* IE9 Compat Modes */
}
@font-face {
  font-family: 'Avenir Next Bold';
  src: url('../fonts/AvenirNextLTPro-Bold.otf'); /* IE9 Compat Modes */
}
@font-face {
  font-family: 'Avenir Next Reg';
  src: url('../fonts/Avenir-Next.ttc'); /* IE9 Compat Modes */
}
@font-face {
  font-family: "Acumin Variable Concept"; src: url("//db.onlinewebfonts.com/t/066ce24dae3730ed6c648b09efaea93a.eot"); src: url("//db.onlinewebfonts.com/t/066ce24dae3730ed6c648b09efaea93a.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/066ce24dae3730ed6c648b09efaea93a.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/066ce24dae3730ed6c648b09efaea93a.woff") format("woff"), url("//db.onlinewebfonts.com/t/066ce24dae3730ed6c648b09efaea93a.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/066ce24dae3730ed6c648b09efaea93a.svg#Acumin Variable Concept") format("svg"); }

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
