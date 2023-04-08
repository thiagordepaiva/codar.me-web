import { createGlobalStyle } from "styled-components";

import { background, font } from "./styled";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    ${background}
    ${font}

    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    display: flex;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  input {
    font-size: inherit;
    outline: none;
  }
`;
