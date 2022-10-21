import React from "react";
import { Link } from "react-router-dom";
import {
  ScreensaverWrapper,
  ScreensaverContainer,
  ScreensaverCopy,
  ScreensaverLogo,
  ScreensaverTitle,
  ScreensaverTitle2,
  ScreensaverLegalNotice,
  Card,
} from "@/pages/screensaver/screensaver.styles";
import LegalNotice from "@/components/legal-notice/legal-notice";
import { Modal } from "@/components/modal/modal";
import LegalPdf from "@/pdf/pdf";
import sessionManager from "@/services/session-manager";

export default function Screensaver() {
  // const [pdfIsShown, setPdfIsShown] = React.useState(false);
  // const showCartHandler = () => {
  //   setPdfIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setPdfIsShown(false);
  // };

  React.useEffect(() => {
    sessionManager.end();
  }, []);

  return (
    <>
      {/* {pdfIsShown && (
        <Modal onClose={() => hideCartHandler()}>
          <Card>
            <LegalPdf prefix="./assets/legal-pdf" pages={53} />
            <button onClick={() => hideCartHandler()}>X</button>
          </Card>
        </Modal>
      )} */}
      <Link to="/home">
        <ScreensaverWrapper>
          <ScreensaverContainer>
            <ScreensaverLogo src="./assets/logo.svg" alt="" />
            <ScreensaverTitle2 src="./assets/screensaver/title2.svg" alt="" />
            <ScreensaverTitle src="./assets/screensaver/title.svg" alt="" />
          </ScreensaverContainer>

          <ScreensaverCopy>
            <img src="./assets/screensaver/copy.svg" alt="" />
          </ScreensaverCopy>

          <ScreensaverLegalNotice>
            <img src="./assets/screensaver/legal.svg" alt="" />
          </ScreensaverLegalNotice>
        </ScreensaverWrapper>
      </Link>
    </>
  );
}
