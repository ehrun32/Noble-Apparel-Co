import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
