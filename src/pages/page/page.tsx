import React from "react";
import { useParams } from "react-router-dom";
import { PageWrapper, PageImage } from "@/pages/page/page.styles";
import Redirect from "@/pages/page/redirect";
import Menu from "@/components/menu/menu";
import Video from "@/components/video/video";

export default function Page() {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <PageWrapper>
      {id > 5 && <Redirect />}
      {[1, 2].includes(id) && (
        <PageImage key={id} src={`/assets/page/${id}.svg`} alt="" />
      )}
      {[3, 4].includes(id) && (
        <React.Fragment key={id}>
          <PageImage key={id} src={`/assets/page/${id}.svg`} alt="" />
          <Video src={`/assets/page/${id}.mp4`} />
        </React.Fragment>
      )}
      <Menu
        prev={id === 1 ? "/home" : `/page/${id - 1}`}
        next={id === 5 ? undefined : `/page/${id + 1}`}
      />
    </PageWrapper>
  );
}
