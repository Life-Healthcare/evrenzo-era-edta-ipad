import styled from "styled-components";
import { fadeInAndUp } from "@/styles/keyframes";

export const PageImage = styled.img`
  opacity: 0;
  animation: ${fadeInAndUp} var(--speed) ease-in forwards;
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: calc(127px * var(--scale-y));

  &.id-1 ${PageImage} {
    width: calc(1403px * var(--scale-x));
  }

  &.id-2 ${PageImage} {
    width: calc(1162px * var(--scale-x));
  }

  &.id-3 ${PageImage} {
    width: calc(573px * var(--scale-x));
  }

  &.id-4 ${PageImage} {
    width: calc(364.1px * var(--scale-x));
  }
`;
