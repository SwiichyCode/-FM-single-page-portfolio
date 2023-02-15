import React from "react";
import { Logo } from "@/components/common/Logo";
import { items } from "./data";
import * as S from "./styles";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <S.Container className={className}>
      <Logo />
      <ul>
        {items.map(({ icon, url }, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};
