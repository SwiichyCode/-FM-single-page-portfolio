import { Experiences } from "@/components/layouts/Experiences";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/layouts/Hero";
import { Projects } from "@/components/layouts/Projects";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <Experiences />
      <Projects />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-dark);
  background-position: fixed;

  color: var(--color-white);
  gap: var(--gap-section);
  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 0 0;
    gap: 0;
  }
  @media screen and (min-width: 1024px) {
    align-items: center;
    padding: 0 0rem;
  }
`;
