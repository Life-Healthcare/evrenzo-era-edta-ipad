import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --root-size: 20px;
    --speed: 400ms;
    --ease: ease;
    --device-width: 2048;
    --device-height: 1536;
  }

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
    font-size: var(--root-size);
    font-family: Arial, sans-serif;
    font-weight: normal;
    line-height: 1em;
    background-color: #1e1e1e;
    color: #fefefe;
    background-image: url("/assets/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }

  svg, img, video {
    display: block;
  }

  svg, img {
    pointer-events: none;
    user-select: none;
  }
`;
