import React from "react";
import { Link } from "react-router-dom";
import {
  ScreensaverWrapper,
  ScreensaverContainer,
  ScreensaverInformation,
  ScreensaverLogo,
  ScreensaverTitle,
  ScreensaverIntroduction,
  ScreensaverDisclaimer,
  ScreensaverStart,
} from "@/pages/screensaver/screensaver.styles";
import LegalNotice from "@/components/legal-notice/legal-notice";

export default function Screensaver() {
  return (
    <ScreensaverWrapper>
      <ScreensaverContainer>
        <ScreensaverLogo src="./assets/logo.svg" alt="" />

        <ScreensaverTitle src="./assets/screensaver/title.svg" alt="" />

        <ScreensaverIntroduction
          src="./assets/screensaver/introduction.svg"
          alt=""
        />
        <ScreensaverDisclaimer
          src="./assets/screensaver/disclaimer.svg"
          alt=""
        />
        <Link to="/home">
          <ScreensaverStart src="./assets/screensaver/start.svg" alt="" />
        </Link>
      </ScreensaverContainer>

      <ScreensaverInformation
        src="./assets/screensaver/information.svg"
        alt=""
      />

      <LegalNotice showSecondLegalNotice/>
    </ScreensaverWrapper>
  );
}
