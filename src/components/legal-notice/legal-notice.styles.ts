import styled from "styled-components";

export const LegalNoticeWrapper = styled.div`
  position: absolute;
  top: calc(1275px * var(--scale-y));
  left: calc(136px * var(--scale-x));
  color: white;
  font-family: "TradeGothicLTStd-Bd2";

  svg {
    width: calc(551.2px * var(--scale-x));
  }

  & svg:nth-child(2) {
    margin-top: calc(20px * var(--scale-y));
  }
`;
