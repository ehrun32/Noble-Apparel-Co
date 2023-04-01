import styled from "styled-components";

export const SignInContainer = styled.div`
  grid-area: span 9 / span 1 / auto / auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  flex-shrink: 1;
  width: 380px;
  margin: 0px auto;

  h2 {
    margin: 10px 0;
    text-align: center;
  }

  @media (max-width: 30em) {
    margin: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
