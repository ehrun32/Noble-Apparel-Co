import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 7.5vh);
  gap: 1rem;
  height: 100%;
  overflow-y: hidden;
  place-items: stretch;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`;
