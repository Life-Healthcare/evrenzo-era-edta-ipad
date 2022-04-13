import React from "react";
import { LegalNoticeWrapper } from "@/components/legal-notice/legal-notice.styles";

export default function LegalNotice() {
  return (
    <LegalNoticeWrapper>
      <svg
        width="551.2"
        height="93.1"
        viewBox="0 0 551.2 93.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor" fontFamily="'TradeGothicLTStd-Bd2'">
          <text fontSize="23" transform="translate(0 19.8027)">
            In the EU, EVRENZO
          </text>
          <text fontSize="13.416" transform="translate(190.0804 12.1368)">
            TM
          </text>
          <g fontSize="23">
            <text transform="translate(230.7151 19.8027)">
              {" "}
              (roxadustat) is licensed for{" "}
            </text>
            <text transform="translate(0 53.8027)">
              treatment of adult patients with symptomatic anaemia{" "}
            </text>
            <text transform="translate(0 87.8027)">
              associated with chronic kidney disease (CKD)
            </text>
          </g>
        </g>
      </svg>
    </LegalNoticeWrapper>
  );
}
