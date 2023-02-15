import styled from "styled-components";

export const Container = styled.header`
  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 0 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 120rem;
  }
`;
