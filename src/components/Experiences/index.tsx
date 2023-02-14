import React from "react";
import { items } from "./data";
import * as S from "./styles";

export const Experiences = () => {
  return (
    <S.Container>
      <ul>
        {items.map(({ language, years }, index) => (
          <li key={index}>
            <h3>{language}</h3>
            <p>{years} years experience</p>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};
