import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { LegalNoticeWrapper } from "@/components/legal-notice/legal-notice.styles";
import { fadeInAndUp, tap } from "@/styles/keyframes";

export const HomeNotice = styled.img`
  margin-inline: auto;
  margin-top: calc(65px * var(--scale-y));
  width: calc(1091px * var(--scale-x));
`;

export const HomeIndicator = styled.img`
  margin-inline: auto;
  margin-top: calc(36px * var(--scale-y));
  animation: ${tap} calc(var(--speed) * 2.5) var(--ease) infinite
    calc(var(--speed) * 5 * 0.5);
  width: calc(153px * var(--scale-x));
`;

export const HomeMenuItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: calc(108px * var(--scale-y));
  height: calc(530px * var(--scale-y));
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  animation: ${fadeInAndUp} var(--speed) ease-out forwards;
  opacity: 0;

  img {
    :nth-child(1) {
      width: calc(309px * var(--scale-x));
    }
    :nth-child(2) {
      width: calc(273px * var(--scale-x));
    }
    :nth-child(3) {
      width: calc(278px * var(--scale-x));
    }
    :nth-child(4) {
      width: calc(326px * var(--scale-x));
    }
    :nth-child(5) {
      width: calc(279px * var(--scale-x));
    }
  }
`;

export const HomeMenu = styled.div`
  --pacing: 0.5;
  --offset-x: calc(73px * var(--scale-x));
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: calc(22px * var(--scale-x));
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
  margin-bottom: calc(83px * var(--scale-y));
  width: calc(396px * var(--scale-x));
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: calc(179px * var(--scale-y));

  ${LegalNoticeWrapper} {
    color: #4d4d4f;
  }
`;
