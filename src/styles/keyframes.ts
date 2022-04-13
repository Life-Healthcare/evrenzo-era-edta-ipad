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
