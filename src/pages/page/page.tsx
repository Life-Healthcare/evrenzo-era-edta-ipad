import React from "react";
import { useParams } from "react-router-dom";
import { PageWrapper, PageImage, PdfContainer } from "@/pages/page/page.styles";
import Redirect from "@/pages/page/redirect";
import Menu from "@/components/menu/menu";
import Video from "@/components/video/video";
import Pdf from "@/pdf/pdf";

export default function Page() {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <PageWrapper className={`id-${id}`}>
      {id > 5 && <Redirect />}
      {[1, 2].includes(id) && (
        <PageImage key={id} src={`./assets/page/${id}.svg`} alt="" />
      )}
      {[3, 5].includes(id) && (
        <React.Fragment key={id}>
          <PageImage key={id} src={`./assets/page/${id}.svg`} alt="" />
          <Video
            src={`./assets/page/${id}.mp4`}
            poster={`./assets/page/${id}.png`}
          />
        </React.Fragment>
      )}
      {[4].includes(id) && (
        <React.Fragment key={id}>
          <PageImage key={id} src={`./assets/page/${id}.svg`} alt="" />
          <PdfContainer>
            <Pdf prefix="./assets/pdf" pages={4} extention="png"/>
          </PdfContainer>
        </React.Fragment>
      )}
      <Menu
        prev={id === 1 ? "/home" : `/page/${id - 1}`}
        next={id === 5 ? undefined : `/page/${id + 1}`}
      />
    </PageWrapper>
  );
}
