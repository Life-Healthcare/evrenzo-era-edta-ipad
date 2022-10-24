import styled from "styled-components";

export const ScreensaverTitle = styled.img`
  margin-inline: auto;
  margin-top: calc(111px * var(--scale-y));
  width: calc(1413px * var(--scale-x));
`;

export const ScreensaverTitle2 = styled.img`
  margin-inline: auto;
  margin-top: calc(92px * var(--scale-y));
  width: calc(799px * var(--scale-x));
`;

export const ScreensaverLogo = styled.img`
  width: calc(396px * var(--scale-x));
  position: fixed;
`;

export const ScreensaverCopy = styled.div`
  position: absolute;
  bottom: calc(57px * var(--scale-y));
  left: calc(1357px * var(--scale-x));
  width: calc(624px * var(--scale-x));

  & img {
    width: 100%;
  }
`;

export const ScreensaverContainer = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-top: calc(115px * var(--scale-y));
  padding-left: calc(135px * var(--scale-x));
`;

export const ScreensaverWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./assets/screensaver/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

export const ScreensaverLegalNotice = styled.div`
  position: absolute;
  left: calc(136px * var(--scale-x));
  bottom: calc(57px * var(--scale-y));
  width: calc(1178px * var(--scale-x));
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
    outline: none;
    position: absolute;
    top: calc(40px * var(--scale-y)); // 2rem;
    right: calc(40px * var(--scale-x)); // 2rem;
    color: #000;
  }
`;
