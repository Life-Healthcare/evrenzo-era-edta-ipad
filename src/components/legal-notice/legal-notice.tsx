import React from "react";
import { LegalNoticeWrapper } from "@/components/legal-notice/legal-notice.styles";

type Props = {
  showSecondLegalNotice?: boolean;
};

export default function LegalNotice({ showSecondLegalNotice = false }: Props) {
  return (
    <LegalNoticeWrapper showSecondLegalNotice={showSecondLegalNotice}>
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
      {showSecondLegalNotice && <svg
        xmlns="http://www.w3.org/2000/svg"
        width="624"
        height="81"
        viewBox="0 0 624 81"
      >
        <text
          id="EVZ_2022_0057_ABC_Date_of_preparation:_May_2022_Date_of_expiry:_June_2022"
          data-name="EVZ_2022_0057_ABC
Date of preparation: May 2022
Date of expiry: June 2022"
          fill="#fff"
          fontSize="23"
          fontFamily="TradeGothicLTStd-Bd2, Trade Gothic LT Std"
        >
          <tspan x="0" y="17">
            EVZ_2022_0057_ABC
          </tspan>
          <tspan x="0" y="46">
            Date of preparation: May 2022
          </tspan>
          <tspan x="0" y="75">
            Date of expiry: June 2022
          </tspan>
        </text>
      </svg>}
    </LegalNoticeWrapper>
  );
}
