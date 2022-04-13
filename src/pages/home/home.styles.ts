import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { LegalNoticeWrapper } from "@/components/legal-notice/legal-notice.styles";
import { fadeInAndUp, tap } from "@/styles/keyframes";

export const HomeNotice = styled.img`
  margin-inline: auto;
  margin-top: 65px;
`;

export const HomeIndicator = styled.img`
  margin-inline: auto;
  margin-top: 36px;
  animation: ${tap} calc(var(--speed) * 2.5) var(--ease) infinite
    calc(var(--speed) * 5 * 0.5);
`;

export const HomeMenuItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 108px;
  height: 530px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  animation: ${fadeInAndUp} var(--speed) ease-out forwards;
  opacity: 0;
`;

export const HomeMenu = styled.div`
  --pacing: 0.5;
  --offset-x: 73px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
  padding-left: var(--offset-x);
  padding-right: var(--offset-x);

  ${() => {
    return Array.from(Array(5)).map((_, index) => {
      return css`
        ${HomeMenuItem}:nth-child(${index + 1}) {
          animation-delay: calc(var(--speed) * ${index} * var(--pacing));
        }
      `;
    });
  }}
`;

export const HomeLogo = styled.img`
  margin-inline: auto;
  margin-bottom: 83px;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 179px;

  ${LegalNoticeWrapper} {
    color: #4d4d4f;
  }
`;
