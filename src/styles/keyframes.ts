import { keyframes } from "styled-components";

export const fadeInAndUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const tap = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.8);
  }
`;
