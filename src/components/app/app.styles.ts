import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 20px;
    font-family: Arial, sans-serif;
    font-weight: normal;
    line-height: 1em;
    background-color: #1e1e1e;
    color: #fefefe;
  }
`;
