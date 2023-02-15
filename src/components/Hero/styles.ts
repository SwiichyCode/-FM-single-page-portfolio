import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-white);
  gap: var(--gap-24);
  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 44.3rem;
    text-align: left;
    align-items: flex-start;
    gap: 6rem;
    margin-bottom: 6rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 120rem;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--gap-24);

    p {
      width: 100%;
      max-width: 44.5rem;
    }

    @media screen and (min-width: 768px) {
      align-items: flex-start;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 4rem;
    letter-spacing: -1.13636px;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    @media screen and (min-width: 1024px) {
      flex-direction: column;
    }

    span {
      text-decoration: underline;
      text-decoration-color: var(--color-green);
    }
  }
`;
