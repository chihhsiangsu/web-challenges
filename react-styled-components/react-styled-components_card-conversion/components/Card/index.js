import styled from "styled-components";
import { StyledCardWrapper } from "../CardWrapper";
import { StyledCardTitle } from "../CardTitle";
import { StylesCardDescription } from "../CardDescription";

export default function Card() {
  return (
    <StyledCardWrapper>
      <StyledCardTitle>Homer Simpson</StyledCardTitle>
      <StylesCardDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </StylesCardDescription>
    </StyledCardWrapper>
  );
}
