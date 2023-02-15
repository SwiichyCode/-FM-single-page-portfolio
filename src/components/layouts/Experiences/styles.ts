import styled from "styled-components";

export const Container = styled.section`
  border-top: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
  padding: 4rem 0;

  @media screen and (min-width: 768px) {
    border-bottom: none;
    padding: 4rem 1.6rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 120rem;
    padding: 10rem 1.6rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-white);
    gap: var(--gap-24);
    padding: 0 1.6rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: initial;
      text-align: left;
      gap: 5.2rem;
      margin-bottom: 10rem;

      li {
        width: 100%;
        max-width: 34.5rem;
      }
    }

    h3 {
      letter-spacing: -1px;
    }

    p {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: var(--color-grey);
    }
  }
`;
