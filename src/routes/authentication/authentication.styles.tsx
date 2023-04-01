import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  width: 100%;
  max-width: 110em;
  margin: 0px auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(21, 4vh);
  grid-template-columns: repeat(2, minmax(38rem, 1fr));
  column-gap: 5rem;

  @media (max-width: 62.5em) {
    grid-template-columns: minmax(100%, 1fr);
    grid-template-rows: repeat(23, 4vh);
  }
`;
