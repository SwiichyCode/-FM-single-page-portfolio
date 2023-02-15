import React from "react";
import { Contact } from "@/components/layouts/Contact";
import { Navbar } from "@/components/layouts/Navbar";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <Contact />
      <div className="wrapper">
        <Navbar className="footer-navbar" />
      </div>
    </S.Container>
  );
};
