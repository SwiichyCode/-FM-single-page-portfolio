import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 2.9rem 0 3rem;
  color: var(--color-white);
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.9rem 0rem 0 0rem;
    margin-bottom: 9rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: var(--gap-24);
  }

  a {
    text-decoration: none;
  }
`;
