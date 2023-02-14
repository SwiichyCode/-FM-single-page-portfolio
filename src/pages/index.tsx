import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  color: var(--color-white);
  gap: var(--gap-section);
  padding: 0 1.6rem;

  @media screen and (min-width: 768px) {
    padding: 0 3.2rem;
    gap: 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 16.5rem;
  }
`;
