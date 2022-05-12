import styled from "styled-components";

export const ScreensaverIntroduction = styled.img`
  margin-inline: auto;
  margin-top: calc(34px * var(--scale-y));
  width: calc(1400px * var(--scale-x));
`;

export const ScreensaverTitle = styled.img`
  margin-inline: auto;
  margin-top: calc(158px * var(--scale-y));
  width: calc(1519px * var(--scale-x));
`;

export const ScreensaverDisclaimer = styled.img`
  margin-inline: auto;
  margin-top: calc(264px * var(--scale-y));
  width: calc(529px * var(--scale-x));
`;

export const ScreensaverStart = styled.img`
  margin-inline: auto;
  margin-top: calc(34px * var(--scale-y));
  width: calc(578px * var(--scale-x));
`;

export const ScreensaverLogo = styled.img`
  width: calc(396px * var(--scale-x));
`;

export const ScreensaverInformation = styled.div`
  position: absolute;
  top: calc(1359px * var(--scale-y));
  left: calc(1442px * var(--scale-x));
  width: calc(496px * var(--scale-x));

  & img {
    width: 100%;
  }
`;

export const ScreensaverContainer = styled.div`
  width: 100%;
  max-width: calc(1880px * var(--scale-x));
  margin-inline: auto;
  padding-top: calc(150px * var(--scale-y));
`;

export const ScreensaverWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./assets/screensaver/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

export const Card = styled.div`
  aspect-ratio: 1 / 1;
  width: calc(1417.94px * var(--scale-x)); // 70.897rem;
  height: calc(1179.68px * var(--scale-y)); // 58.984rem;
  position: relative;

  & > button {
    font-size: calc(40px * var(--scale-x)); // 2rem;
    text-align: end;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: calc(40px * var(--scale-x)); // 2rem;
    height: calc(40px * var(--scale-y)); // 2rem;
    padding: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    position: absolute;
    top: calc(40px * var(--scale-y)); // 2rem;
    right: calc(40px * var(--scale-x)); // 2rem;
    color: #000;
  }
`;
