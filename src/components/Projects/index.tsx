import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { items } from "./data";
import * as S from "./styles";

// Take a github api for get the projects

export const Projects = () => {
  return (
    <S.Container>
      <header>
        <h2>Projects</h2>
        <Button text="contact me" />
      </header>
      <ul>
        {items.map(({ img, title, stacks, liveURL, githubURL }, index) => (
          <S.Card key={index}>
            <Image src={img} alt={title} />
            <div className="description">
              <h4>{title}</h4>
              <ul>
                {stacks.map((stack, index) => (
                  <li key={index}>{stack}</li>
                ))}
              </ul>
            </div>
            <div className="links">
              <Button as="a" href={liveURL} text="view project" />
              <Button as="a" href={githubURL} text="view code" />
            </div>
          </S.Card>
        ))}
      </ul>
    </S.Container>
  );
};
