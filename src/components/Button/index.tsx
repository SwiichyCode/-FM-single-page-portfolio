import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  as?: "button" | "a";
  href?: string;
}

export const Button = ({ text, as, href, ...props }: ButtonProps) => (
  <StyledButton as={as} href={href} {...props}>
    {text}
  </StyledButton>
);

const StyledButton = styled.button`
  width: fit-content;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: 2.28571px;
  text-transform: uppercase;
  color: var(--color-white);
  border: none;
  border-bottom: 2px solid var(--color-green);
  background: transparent;
  padding-bottom: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-green);
  }
`;
