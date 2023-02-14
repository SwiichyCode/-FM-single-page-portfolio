import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 10rem;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 120rem;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 768px) {
      margin-bottom: 6rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;

    @media screen and (min-width: 1024px) {
      justify-content: space-between;
      row-gap: 3rem;
      column-gap: 6.9rem;
    }
  }
`;

export const Card = styled.li`
  position: relative;
  width: 100%;
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    max-width: 34.2rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 54rem;

    &:hover > img {
      background: #000000;
      mix-blend-mode: normal;
      opacity: 0.75;
    }

    &:hover > .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4.8rem;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .description {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      justify-content: flex-start;
      gap: 1.8rem;

      li {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.8rem;
        color: var(--color-grey);
      }
    }
  }

  .links {
    display: flex;
    gap: 3rem;

    @media screen and (min-width: 1024px) {
      display: none;
      position: absolute;
      // Need to fix perfect centering
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
