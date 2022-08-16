// GlobalStyle.jsx

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.style.background};
  }
`;

export default GlobalStyle;
