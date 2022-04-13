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
  padding-bottom: 127px;
`;
