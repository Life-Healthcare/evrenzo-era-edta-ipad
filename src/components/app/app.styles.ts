import { createGlobalStyle } from "styled-components";

interface AppResetProps {
  last: boolean
}

export const AppReset = createGlobalStyle<AppResetProps>`
  @import url("./fonts.css");

  :root {
    --root-size: 20px;
    --speed: 400ms;
    --ease: ease;
    --artwork-width: 2048;
    --artwork-height: 1536;
    --device-width: 1080;
    --device-height: 790;
    --scale-x: calc(var(--device-width) / var(--artwork-width));
    --scale-y: calc(var(--device-height) / var(--artwork-height));
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
    position: fixed;
    inset: 0;
    overflow: hidden;
  }

  html {
    font-size: var(--root-size);
    font-family: "Trade Gothic LT Std", Helvetica, Arial, sans-serif;
    font-weight: normal;
    line-height: 1em;
    background-color: #1e1e1e;
    color: #fefefe;
    ${props => props.last ? 'background-image: url(./assets/page/background.png);' : `background-image: url("./assets/background.jpg");`}
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
    height: auto;
  }
`;
