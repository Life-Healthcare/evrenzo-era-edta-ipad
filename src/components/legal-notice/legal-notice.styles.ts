import styled, { css } from "styled-components";

export const LegalNoticeWrapper = styled.div<{
  showSecondLegalNotice?: boolean;
}>`
  position: absolute;
  /* top: calc(1275px * var(--scale-y)); */
  left: calc(136px * var(--scale-x));
  color: white;
  font-family: "TradeGothicLTStd-Bd2";
  ${(p) =>
    p.showSecondLegalNotice
      ? css`
          top: calc(1275px * var(--scale-y));
        `
      : css`
          color: #4D4D4F;
          top: calc(1375px * var(--scale-y));
        `}

  svg {
    width: calc(551.2px * var(--scale-x));
  }

  & svg:nth-child(2) {
    margin-top: calc(20px * var(--scale-y));
  }
`;
