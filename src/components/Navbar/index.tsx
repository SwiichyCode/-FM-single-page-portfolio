import React from "react";
import Image from "next/image";
import githubIcon from "@/assets/images/icon-github.svg";
import linkedinIcon from "@/assets/images/icon-linkedin.svg";
import frontendMentor from "@/assets/images/icon-frontend-mentor.svg";
import iconTwitter from "@/assets/images/icon-twitter.svg";
import { Logo } from "@/components/Logo";
import * as S from "./styles";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const items = [
    { icon: <FaGithub />, url: "https://github.com/SwiichyCode" },
    {
      icon: <SiFrontendmentor />,
      url: "https://www.frontendmentor.io/profile/SwiichyCode",
    },
    { icon: <FaLinkedin />, url: "" },
    { icon: <FaTwitter />, url: "https://twitter.com/SwiichyCode_" },
  ];

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
