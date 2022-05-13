import React from "react";
import { LegalNoticeWrapper } from "@/components/legal-notice/legal-notice.styles";
import Legal1SVG from "@/components/legal-notice/legal1";
import Legal2SVG from "@/components/legal-notice/legal2";

type Props = {
  showSecondLegalNotice?: boolean;
};

export default function LegalNotice({ showSecondLegalNotice = false }: Props) {
  return (
    <LegalNoticeWrapper showSecondLegalNotice={showSecondLegalNotice}>
      <Legal1SVG fill={showSecondLegalNotice ? "#fff" : "#000"} />
      {showSecondLegalNotice && <Legal2SVG />}
    </LegalNoticeWrapper>
  );
}
