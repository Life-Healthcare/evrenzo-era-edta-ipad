import styled from "styled-components";

export const VideoPlay = styled.div`
  --size: calc(138px * var(--scale-x));
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
  pointer-events: none;

  & img {
    width: 100%;
    height: auto;
  }
`;

export const VideoVideo = styled.video`
  display: block;
  width: 100%;
  cursor: pointer;
  aspect-ratio: 16 / 9;
`;

export const VideoWrapper = styled.div`
  position: relative;
  margin-top: calc(55px * var(--scale-y));
  width: 100%;
  max-width: calc(1848px * var(--scale-x));
`;
