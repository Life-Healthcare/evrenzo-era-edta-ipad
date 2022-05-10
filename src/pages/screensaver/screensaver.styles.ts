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

export const ScreensaverInformation = styled.img`
  position: absolute;
  top: calc(1359px * var(--scale-y));
  left: calc(1442px * var(--scale-x));
  width: calc(496px * var(--scale-x));
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
