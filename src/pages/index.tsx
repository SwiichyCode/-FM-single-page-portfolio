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
