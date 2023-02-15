import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  padding: 6rem 0 8.7rem 0;
  /* border-bottom: 1px solid var(--color-grey); */

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 44.5rem;
    border-bottom: none;
  }

  @media screen and (min-width: 1024px) {
    max-width: 111rem;
    display: flex;
    justify-content: space-between;
    margin: 0 -3.2rem;
  }

  header {
    margin-bottom: 4.8rem;

    h2 {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 1024px) {
      width: 100%;
      max-width: 44.5rem;
      text-align: left;

      h2 {
        text-align: left;
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media screen and (min-width: 1024px) {
      width: 100%;
      max-width: 44.5rem;
    }

    .button-wrapper {
      margin-left: auto;
    }
  }
`;
