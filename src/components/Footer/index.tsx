import React from "react";
import styled from "styled-components";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export const Footer = () => {
  return (
    <Container>
      <Contact />
      <div className="wrapper">
        <Navbar className="footer-navbar" />
      </div>
    </Container>
  );
};

const Container = styled.footer`
  background-color: var(--color-dark-grey);
  margin: 0 -1.6rem;
  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 0 -3.2rem; */
    padding: 0 2.9 0 3rem;

    .footer-navbar {
      margin-bottom: 4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin: 0 -4rem;
    padding: 0 4.5rem;
  }

  .wrapper {
    margin-top: 3.9rem;
    border-top: 1px solid var(--color-grey);

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }
`;
