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
  align-items: baseline;
  justify-content: center;
  padding-left: calc(136px * var(--scale-y));

  &.id-1 ${PageImage} {
    width: calc(1867px * var(--scale-x));
  }

  &.id-2 ${PageImage} {
    width: calc(1869px * var(--scale-x));
  }

  &.id-3 ${PageImage} {
    width: calc(1867px * var(--scale-x));
  }

  &.id-4 ${PageImage} {
    width: calc(1867px * var(--scale-x));
  }

  &.id-5 ${PageImage} {
    width: calc(1877px * var(--scale-x));
  }

  &.id-6 ${PageImage} {
    width: calc(1877px * var(--scale-x));
  }

  &.id-7 ${PageImage} {
    width: calc(1867px * var(--scale-x));
  }

  &.id-8 ${PageImage} {
    width: calc(1867px * var(--scale-x));
  }
`;

export const PdfContainer = styled.div`
  position: relative;
  margin-top: calc(55px * var(--scale-y));
  width: auto;
  max-width: calc(1848px * var(--scale-x));
  height: calc(100% - 8em);
  overflow: auto;
`;
