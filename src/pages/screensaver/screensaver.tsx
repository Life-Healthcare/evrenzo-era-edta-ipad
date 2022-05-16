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
  Card,
} from "@/pages/screensaver/screensaver.styles";
import LegalNotice from "@/components/legal-notice/legal-notice";
import { Modal } from "@/components/modal/modal";
import LegalPdf from "@/pdf/pdf";
import sessionManager from "@/services/session-manager";

export default function Screensaver() {
  const [pdfIsShown, setPdfIsShown] = React.useState(false);
  const showCartHandler = () => {
    setPdfIsShown(true);
  };

  const hideCartHandler = () => {
    setPdfIsShown(false);
  };

  React.useEffect(() => {
    sessionManager.end();
  }, []);

  return (
    <>
      {pdfIsShown && (
        <Modal onClose={() => hideCartHandler()}>
          <Card>
            <LegalPdf prefix="./assets/legal-pdf" pages={53} />
            <button onClick={() => hideCartHandler()}>X</button>
          </Card>
        </Modal>
      )}
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

        <ScreensaverInformation onClick={showCartHandler}>
          <img src="./assets/screensaver/information.svg" alt="" />
        </ScreensaverInformation>

        <LegalNotice showSecondLegalNotice />
      </ScreensaverWrapper>
    </>
  );
}
