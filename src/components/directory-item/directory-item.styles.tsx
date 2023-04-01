import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  --length: 7em;
  box-sizing: border-box;
  opacity: 0.7;
  height: calc(var(--length) - 1.5em);
  width: calc(var(--length) + 0.5em);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  user-select: none;
  outline: none;
  color: rgb(74, 74, 74);

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 18px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 14px;
  }

  @media (max-width: 48em) {
    --length: 6em;
  }
`;

export const DirectoryItemContainer = styled.div`
  height: 100%;
  min-width: 30%;
  width: 100%;
  overflow: hidden;
  border: 1px solid black;
  margin: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  perspective-origin: center center;
  perspective: 700rem;
  cursor: pointer;

  &:nth-child(-n + 3) {
    grid-area: span 4 / span 4 / auto / auto;
  }
  &:nth-child(n + 4) {
    grid-area: 5 / span 6 / -1 / auto;
  }
  &:nth-child(n + 4) {
    grid-area: 5 / span 6 / -1 / auto;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }

  @media (max-width: 48em) {
    &:first-child {
      grid-area: span 4 / span 6 / auto / auto;
    }
    &:nth-child(2) {
      grid-area: span 3 / span 6 / auto / auto;
    }
    &:nth-child(3) {
      grid-area: span 3 / span 6 / auto / auto;
    }
    &:nth-child(4) {
      grid-area: 4 / 7 / span 4 / -1;
    }
    &:nth-child(n + 5) {
      grid-area: 8 / 1 / -1 / -1;
    }
  }
`;
