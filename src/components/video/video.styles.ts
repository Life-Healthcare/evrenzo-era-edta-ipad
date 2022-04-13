import styled from "styled-components";

export const VideoPlay = styled.div`
  --size: 138px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export const VideoVideo = styled.video`
  display: block;
  width: 100%;
  cursor: pointer;
`;

export const VideoWrapper = styled.div`
  position: relative;
  margin-top: 55px;
  width: 100%;
  max-width: 1848px;
`;
