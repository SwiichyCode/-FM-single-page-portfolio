import React, { Fragment } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
  ref?: any;
}

export const Input = ({ ref, error, ...props }: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput {...props} />
      <StyledLine error={error} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div``;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  padding: 0 0 1.6rem 2.4rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-transform: uppercase;
  color: var(--color-white);
  border: none;

  &::placeholder {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.222222px;
    text-transform: uppercase;
    color: var(--color-grey);
  }

  &:focus {
    outline: none;
  }
`;

interface StyledLineProps {
  error?: string | null;
}

export const StyledLine = styled.div<StyledLineProps>`
  width: 100%;
  height: 1px;
  background-color: ${(props) =>
    props.error ? "var(--color-red)" : "var(--color-grey)"};
`;
