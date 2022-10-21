import React from "react";
import { useParams } from "react-router-dom";
import { PageWrapper, PageImage, PdfContainer } from "@/pages/page/page.styles";
import Redirect from "@/pages/page/redirect";
import Menu from "@/components/menu/menu";
import Video from "@/components/video/video";
import Pdf from "@/pdf/pdf";
import sessionManager from "@/services/session-manager";

export default function Page() {
  const params = useParams();
  const id = parseInt(params.id);

  React.useEffect(() => {
    if (id > 8) return;
    if (id === 1) {
      sessionManager.start();
    }
    sessionManager.page(`page-${id}`);
  }, [id]);

  return (
    <PageWrapper className={`id-${id}`}>
      {id > 8 && <Redirect />}
      {[1, 2, 3, 4, 5, 6, 7, 8].includes(id) && (
        <PageImage key={id} src={`./assets/page/${id}.svg`} alt="" />
      )}
      <Menu
        prev={id === 1 ? "/home" : `/page/${id - 1}`}
        next={id === 8 ? undefined : `/page/${id + 1}`}
      />
    </PageWrapper>
  );
}
