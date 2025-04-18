import styled, { css } from "styled-components";

export const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.$isBlack === "isBlack" ? "black" : "green"};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
