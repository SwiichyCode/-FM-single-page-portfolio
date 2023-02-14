import React from "react";
import Image from "next/image";
import githubIcon from "@/assets/images/icon-github.svg";
import linkedinIcon from "@/assets/images/icon-linkedin.svg";
import frontendMentor from "@/assets/images/icon-frontend-mentor.svg";
import iconTwitter from "@/assets/images/icon-twitter.svg";
import { Logo } from "@/components/Logo";
import * as S from "./styles";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const items = [
    { icon: githubIcon, url: "https://github.com/SwiichyCode" },
    {
      icon: frontendMentor,
      url: "https://www.frontendmentor.io/profile/SwiichyCode",
    },
    { icon: linkedinIcon, url: "" },
    { icon: iconTwitter, url: "https://twitter.com/home" },
  ];

  return (
    <S.Container className={className}>
      <Logo />
      <ul>
        {items.map(({ icon, url }, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noreferrer">
              <Image src={icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};
