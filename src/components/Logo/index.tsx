import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return <Container>dylanjansana</Container>;
};

const Container = styled.p`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: -0.333333px;
  color: var(--color-white);

  @media screen and (min-width: 1024px) {
    font-size: 3.2rem;
  }
`;
